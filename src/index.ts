import {join} from "./join.gen";

export class Context {
  raw: string;
  input: string;
  index: number;

  constructor(raw: string)
  constructor(raw: string, input: string, index: number)
  constructor(raw: string, input?: string, index?: number) {
    if (input !== undefined && index !== undefined) {
      this.raw = raw;
      this.input = input;
      this.index = index;
    } else {
      this.raw = raw;
      this.input = raw;
      this.index = 0;
    }
  }

  proceed(stride: number) {
    return new Context(this.raw, this.input.slice(stride), this.index + stride)
  }
}

export type Result<A, E> = Ok<A> | Err<E>;

export type Ok<A> = {
  type: "ok";
  data: A;
};

export type ParserSuccess<T> = {
  value: T;
  ctx: Context;
};

export type Err<E> = {
  type: "err";
  reason: E;
};

export type ParserError = {
  expected: string;
  ctx: Context;
};

export type Parser<T> = (ctx: Context) => ParserResult<T>;
export type ParserResult<T> = Result<ParserSuccess<T>, ParserError>;

export namespace Result {
  export function chain<A, B, E>(r: Result<A, E>, f: (x: A) => Result<B, E>): Result<B, E> {
    return isOk(r) ? f(r.data) : r
  }

  export function chainLeft<A, E, F>(r: Result<A, E>, f: (x: E) => Result<A, F>): Result<A, F> {
    return isErr(r) ? f(r.reason) : r
  }

  export function map<A, B, E>(r: Result<A, E>, fa: (x: A) => B): Result<B, E> {
    return isOk(r) ? ok(fa(r.data)) : r
  }

  export function mapLeft<A, E, F>(r: Result<A, E>, fe: (x: E) => F): Result<A, F> {
    return isErr(r) ? err(fe(r.reason)) : r
  }

  export function bimap<A, B, E, F>(r: Result<A, E>, fa: (x: A) => B, fe: (x: E) => F): Result<B, F> {
    return isOk(r) ? ok(fa(r.data)) : err(fe(r.reason))
  }

  export function biChain<A, B, E, F>(r: Result<A, E>, fa: (x: A) => Result<B, F>, fe: (x: E) => Result<B, F>): Result<B, F> {
    return isOk(r) ? fa(r.data) : fe(r.reason)
  }

  export function mux<A, B, E, F>(
    r1: Result<A, E>,
    r2: Result<A, E>,
    faa: (a1: A, a2: A) => Result<B, F>,
    fae: (a1: A, e2: E) => Result<B, F>,
    fea: (e1: E, a2: A) => Result<B, F>,
    fee: (e1: E, e2: E) => Result<B, F>,
  ): Result<B, F> {
    return isOk(r1) ? (isOk(r2) ? faa(r1.data, r2.data) : fae(r1.data, r2.reason)) : (isOk(r2) ? fea(r1.reason, r2.data) : fee(r1.reason, r2.reason))
  }

  export function ok<A>(data: A): Ok<A> {
    return {
      type: "ok",
      data: data,
    }
  }

  export function err<E>(reason: E): Err<E> {
    return {
      type: "err",
      reason: reason,
    }
  }

  export function isOk<A, E>(x: Result<A, E>): x is Ok<A> {
    return x.type === "ok"
  }

  export function isErr<A, E>(x: Result<A, E>): x is Err<E> {
    return x.type === "err"
  }
}

export function whitespace(): Parser<string> {
  return lexemeWithWhitespace(new RegExp(/\s*/m))
}

export function strict<T>(p: Parser<T>): Parser<T> {
  return (ctx: Context) => {
    return Result.chain(p(ctx), data => data.ctx.input.length === 0 ? Result.ok(data) : Result.err({ ctx: data.ctx, expected: `input left: "${data.ctx.input}"` }))
  }
}

export function lexemeWithWhitespace(lex: string | RegExp): Parser<string> {
  return (ctx: Context) => {
    if (typeof lex === "string") {
      return ctx.input.startsWith(lex) ?
        Result.ok({ ctx: ctx.proceed(lex.length), value: lex }) :
        Result.err({ ctx: ctx, expected: lex })
    } else if (typeof lex == "object") {
      const match = lex.exec(ctx.input);
      return match !== null && match.index === 0 ?
        Result.ok({ ctx: ctx.proceed(match[0].length), value: match[0] }) :
        Result.err({ ctx: ctx, expected: lex.source })
    } else {
      const _: never = lex;
    }
  }
}

export function lazy<T>(lp: () => Parser<T>): Parser<T> {
  return (ctx: Context) => lp()(ctx)
}

export function lexeme(lex: string | RegExp): Parser<string> {
  return map(join(lexemeWithWhitespace(lex), whitespace()), x => x[0])
}

export function map<T, U>(p: Parser<T>, f: (x: T) => U): Parser<U> {
  return (ctx: Context) => Result.map(p(ctx), data => ({ ...data, value: f(data.value) }))
}

export function singleton<T>(p: Parser<T>): Parser<T[]> {
  return map(p, x => [x])
}

export function epsilon(): Parser<null> {
  return (ctx: Context) => Result.ok({ ctx: ctx, value: null })
}

export function choice<T>(...ps: Parser<T>[]): Parser<T> {
  return (ctx: Context) => {
    return ps.reduce(
      (oldResult, p) => {
        const newResult = p(ctx);
        return Result.mux(
          oldResult, newResult,
          (oldData, newData) => oldData.ctx.index < newData.ctx.index ? newResult : oldResult,
          (oldData, newReason) => oldResult,
          (oldReason, newData) => newResult,
          (oldReason, newReason) => newResult,
        );
      },
      Result.err({ ctx: ctx, expected: "no parser input" }),
    )
  }
}

export function option<T>(p: Parser<T>): Parser<T | null> {
  return choice(p, ctx => Result.ok({ ctx: ctx, value: null }));
}

export function many<T>(p: Parser<T>, maybePrev?: T[]): Parser<T[]> {
  const prev: T[] = maybePrev || [];
  return (ctx: Context) => {
    const result = p(ctx);
    return Result.biChain(
      result,
      data => many(p, [...prev, data.value])(data.ctx),
      _ => Result.ok({ ctx: ctx, value: prev })
    )
  }
}

export function many1<T>(p: Parser<T>): Parser<T[]> {
  return (ctx: Context) => Result.chain(p(ctx), data => many(p, [data.value])(data.ctx))
}

export function flatten<T>(p: Parser<T[][]>): Parser<T[]> {
  return (ctx: Context) => Result.map(p(ctx), data => ({ ...data, value: data.value.flatMap(x => x) }))
}

export function chain<T>(p: Parser<T>, sep: Parser<T>): Parser<T[]> {
  return choice(flatten(join(many(map(join(p, sep), x => x[0])), map(p, x => [x]))), map(epsilon(), _ => [] as T[]));
}

export function chain1<T>(p: Parser<T>, sep: Parser<T>): Parser<T[]> {
  return flatten(join(many(map(join(p, sep), x => x[0])), map(p, x => [x])));
}

export {join} from "./join.gen";
export {concat} from "./concat.gen";

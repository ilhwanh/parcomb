import {Parser, Context, Result} from "./index";
import {concat} from "./concat.gen";

export function join<A, B>(pa: Parser<A>, pb: Parser<B>): Parser<[A, B]>
export function join<A, B, C>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>): Parser<[A, B, C]>
export function join<A, B, C, D>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>): Parser<[A, B, C, D]>
export function join<A, B, C, D, E>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>): Parser<[A, B, C, D, E]>
export function join<A, B, C, D, E, F>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>): Parser<[A, B, C, D, E, F]>
export function join<A, B, C, D, E, F, G>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>): Parser<[A, B, C, D, E, F, G]>
export function join<A, B, C, D, E, F, G, H>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>): Parser<[A, B, C, D, E, F, G, H]>
export function join<A, B, C, D, E, F, G, H, I>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>): Parser<[A, B, C, D, E, F, G, H, I]>
export function join<A, B, C, D, E, F, G, H, I, J>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>): Parser<[A, B, C, D, E, F, G, H, I, J]>
export function join<A, B, C, D, E, F, G, H, I, J, K>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>): Parser<[A, B, C, D, E, F, G, H, I, J, K]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>, ps: Parser<S>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>, ps: Parser<S>, pt: Parser<T>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>, ps: Parser<S>, pt: Parser<T>, pu: Parser<U>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>, ps: Parser<S>, pt: Parser<T>, pu: Parser<U>, pv: Parser<V>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>, ps: Parser<S>, pt: Parser<T>, pu: Parser<U>, pv: Parser<V>, pw: Parser<W>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>, ps: Parser<S>, pt: Parser<T>, pu: Parser<U>, pv: Parser<V>, pw: Parser<W>, px: Parser<X>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(pa: Parser<A>, pb: Parser<B>, pc: Parser<C>, pd: Parser<D>, pe: Parser<E>, pf: Parser<F>, pg: Parser<G>, ph: Parser<H>, pi: Parser<I>, pj: Parser<J>, pk: Parser<K>, pl: Parser<L>, pm: Parser<M>, pn: Parser<N>, po: Parser<O>, pp: Parser<P>, pq: Parser<Q>, pr: Parser<R>, ps: Parser<S>, pt: Parser<T>, pu: Parser<U>, pv: Parser<V>, pw: Parser<W>, px: Parser<X>, py: Parser<Y>): Parser<[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y]>
export function join<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(pa: Parser<A>, pb: Parser<B>, pc?: Parser<C>, pd?: Parser<D>, pe?: Parser<E>, pf?: Parser<F>, pg?: Parser<G>, ph?: Parser<H>, pi?: Parser<I>, pj?: Parser<J>, pk?: Parser<K>, pl?: Parser<L>, pm?: Parser<M>, pn?: Parser<N>, po?: Parser<O>, pp?: Parser<P>, pq?: Parser<Q>, pr?: Parser<R>, ps?: Parser<S>, pt?: Parser<T>, pu?: Parser<U>, pv?: Parser<V>, pw?: Parser<W>, px?: Parser<X>, py?: Parser<Y>, pz?: Parser<Z>) {
  if (py !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq, pr, ps, pt, pu, pv, pw, px)(ctx),
      oldData => Result.map(
        py(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (px !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq, pr, ps, pt, pu, pv, pw)(ctx),
      oldData => Result.map(
        px(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pw !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq, pr, ps, pt, pu, pv)(ctx),
      oldData => Result.map(
        pw(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pv !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq, pr, ps, pt, pu)(ctx),
      oldData => Result.map(
        pv(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pu !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq, pr, ps, pt)(ctx),
      oldData => Result.map(
        pu(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pt !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq, pr, ps)(ctx),
      oldData => Result.map(
        pt(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (ps !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq, pr)(ctx),
      oldData => Result.map(
        ps(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pr !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp, pq)(ctx),
      oldData => Result.map(
        pr(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pq !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pp)(ctx),
      oldData => Result.map(
        pq(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pp !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po)(ctx),
      oldData => Result.map(
        pp(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (po !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn)(ctx),
      oldData => Result.map(
        po(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pn !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm)(ctx),
      oldData => Result.map(
        pn(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pm !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl)(ctx),
      oldData => Result.map(
        pm(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pl !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk)(ctx),
      oldData => Result.map(
        pl(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pk !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi, pj)(ctx),
      oldData => Result.map(
        pk(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pj !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph, pi)(ctx),
      oldData => Result.map(
        pj(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pi !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg, ph)(ctx),
      oldData => Result.map(
        pi(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (ph !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf, pg)(ctx),
      oldData => Result.map(
        ph(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pg !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe, pf)(ctx),
      oldData => Result.map(
        pg(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pf !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd, pe)(ctx),
      oldData => Result.map(
        pf(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pe !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc, pd)(ctx),
      oldData => Result.map(
        pe(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pd !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb, pc)(ctx),
      oldData => Result.map(
        pd(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pc !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      join(pa, pb)(ctx),
      oldData => Result.map(
        pc(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
      ),
    )
  }
  } else if (pb !== undefined) {
    return (ctx: Context) => {
    return Result.chain(
      pa(ctx),
      oldData => Result.map(
        pb(oldData.ctx),
        newData => ({ ctx: newData.ctx, value: concat([oldData.value] as [A], newData.value) })
      ),
    )
  }
  }
}
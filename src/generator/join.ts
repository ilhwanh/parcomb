import * as gen from "./index";
import * as fs from "fs";


export const join: gen.GeneratorSpec = {
  prefix: `import {Parser, Context, Result} from "./index";
import {concat} from "./concat.gen";

`,

  name: "join",

  min: 2,

  typeVariables: (runes: string[]): string[] => {
    return runes
  },

  generalParameter: (runes: string[]): { name: string, type: string }[] => {
    return runes.map((r, i) => ({ name: i >= join.min ? `p${r.toLowerCase()}?` : `p${r.toLowerCase()}`, type: `Parser<${r}>` }))
  },

  parameters: (runes: string[]): { name: string, type: string }[] => {
    return runes.map(r => ({ name: `p${r.toLowerCase()}`, type: `Parser<${r}>` }))
  },

  predicate: (runes: string[]): string => {
    const parameters = join.parameters(runes);
    return `${parameters[parameters.length - 1].name} !== undefined`
  },

  type: (runes: string[]): string => {
    return `Parser<[${runes.join(", ")}]>`
  },

  body: (runes: string[]): string => {
    if (runes.length === 2) {
      return `return (ctx: Context) => {
  return Result.chain(
    pa(ctx),
    oldData => Result.map(
      pb(oldData.ctx),
      newData => ({ ctx: newData.ctx, value: concat([oldData.value] as [${runes[0]}], newData.value) })
    ),
  )
}`
    } else {
      const parameters = join.parameters(runes);
      return `return (ctx: Context) => {
  return Result.chain(
    join(${parameters.map(p => p.name).slice(0, parameters.length - 1).join(", ")})(ctx),
    oldData => Result.map(
      ${parameters[parameters.length - 1].name}(oldData.ctx),
      newData => ({ ctx: newData.ctx, value: concat(oldData.value, newData.value) })
    ),
  )
}`
    }
  },
};

export function generate() {
  fs.writeFileSync("./src/join.gen.ts", gen.generate(join));
}

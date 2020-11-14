import * as gen from "./index";
import * as fs from "fs";

export const concat: gen.GeneratorSpec & { xType: string } = {
  name: "concat",

  min: 0,

  xType: "Append",

  typeVariables: (runes: string[]): string[] => {
    return [...runes, concat.xType]
  },

  generalParameter: (runes: string[]): { name: string, type: string }[] => {
    const tType = `[${runes.slice(0, runes.length).map(r => `${r}?`).join(", ")}]`;
    return [{ name: "t", type: tType }, { name: "x", type: concat.xType }]
  },

  parameters: (runes: string[]): { name: string, type: string }[] => {
    const tType = `[${runes.slice(0, runes.length).join(", ")}]`;
    return [{ name: "t", type: tType }, { name: "x", type: concat.xType }]
  },

  predicate: (runes: string[]): string => {
    if (runes.length === 0) {
      return "t === []"
    } else {
      return `t[${runes.length - 1}] !== undefined`
    }
  },

  type: (runes: string[]): string => {
    if (runes.length === 0) {
      return `[${concat.xType}]`
    } else {
      return `[${runes.join(", ")}, ${concat.xType}]`
    }
  },

  body: (runes: string[]): string => {
    if (runes.length === 0) {
      return `return [x] as const`
    } else {
      return `return [${runes.map((r, i) => `t[${i}]`).join(", ")}, x] as const`
    }
  },
};

export function generate() {
  fs.writeFileSync("./src/concat.gen.ts", gen.generate(concat));
}

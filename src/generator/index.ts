import {concat} from "./concat";

const runes = new Array(26).fill(0).map((_, i) => Buffer.from(["A".charCodeAt(0) + i]).toString())

export type GeneratorSpec = {
  prefix?: string;
  name: string;
  min: number;
  typeVariables: (runes: string[]) => string[];
  generalParameter: (runes: string[]) => { name: string, type: string }[];
  parameters: (runes: string[]) => { name: string, type: string }[];
  predicate: (runes: string[]) => string;
  type: (runes: string[]) => string;
  body: (runes: string[]) => string;
};

export function generate(gs: GeneratorSpec): string {
  const overloading = runes
    .slice(gs.min)
    .map((r, i) => [gs.typeVariables(runes.slice(0, i + gs.min)), gs.parameters(runes.slice(0, i + gs.min)), gs.type(runes.slice(0, i + gs.min))] as const)
    .map(([typeVars, params, type]) => [typeVars.join(", "), `${params.map(({ name, type }) => `${name}: ${type}`).join(", ")}`, type] as const)
    .map(([typeVars, params, type]) => `export function ${gs.name}<${typeVars}>(${params}): ${type}`)
    .join("\n")
  const generalReceiver = `export function ${gs.name}<${gs.typeVariables(runes).join(", ")}>(${gs.generalParameter(runes).map(({ name, type }) => `${name}: ${type}`).join(", ")})`
  const body = runes
    .slice(gs.min)
    .map((r, i) => [gs.predicate(runes.slice(0, i + gs.min)), gs.body(runes.slice(0, i + gs.min))] as const)
    .map(([pred, body]) => `if (${pred}) {\n  ${body}\n}`)
    .reverse()
    .join(" else ")
  return `${gs.prefix || ""}${overloading}\n${generalReceiver} {\n${"  " + body.replace(/\n/g, "\n  ")}\n}`
}

import * as concatGen from "./concat";
concatGen.generate();

import * as joinGen from "./join";
joinGen.generate();

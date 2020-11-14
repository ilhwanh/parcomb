import {expect} from "chai";
import {choice, Context, flatten, lazy, lexeme, many, many1, map, Result, singleton, strict, join} from "../src";

const numeric = lexeme(/-?(0|[1-9][0-9]*)([.][0-9]+)?([eE][+-]?[0-9]+)?/);
const identifier = lexeme(/[a-zA-Z_][a-zA-Z0-9_]*/);
const literal = choice(numeric, identifier);
const literalData = map(join(many1(literal), lexeme(";")), x => x[0]);
const quoted = map(join(lexeme("\""), lexeme(/[^"]*/), lexeme("\"")), x => x[1]);
const declaration = () => map(join(identifier, choice(dictionary, literalData)), ([name, value]) => ({ type: "declaration", name: name, value: value }));
const dictionary = map(join(lexeme("{"), many(lazy(declaration)), lexeme("}")), x => ({ type: "dictionary", fields: x[1] }));
const parser = strict(many(lazy(declaration)));

describe("foamFile", () => {
  const dataset = [
    {
      name: "simple",
      input: `a { b c; }`,
      output: [
        {
          "type": "declaration",
          "name": "a",
          "value": {
            "type": "dictionary",
            "fields": [
              {
                "type": "declaration",
                "name": "b",
                "value": [
                  "c"
                ]
              }
            ]
          }
        }
      ],
    },
    {
      name: "double",
      input: `a { b c; } d { e f g; h i; }`,
      output: [
        {
          "type": "declaration",
          "name": "a",
          "value": {
            "type": "dictionary",
            "fields": [
              {
                "type": "declaration",
                "name": "b",
                "value": [
                  "c"
                ]
              }
            ]
          }
        },
        {
          "type": "declaration",
          "name": "d",
          "value": {
            "type": "dictionary",
            "fields": [
              {
                "type": "declaration",
                "name": "e",
                "value": [
                  "f",
                  "g"
                ]
              },
              {
                "type": "declaration",
                "name": "h",
                "value": [
                  "i"
                ]
              }
            ]
          }
        }
      ],
    },
  ];

  dataset.forEach(data => {
    it(data.name, () => {
      const result = parser(new Context(data.input))
      if (Result.isErr(result)) {
        expect.fail(result.reason.expected);
      }
      expect(result.data.value).to.deep.equal(data.output)
    });
  })
})

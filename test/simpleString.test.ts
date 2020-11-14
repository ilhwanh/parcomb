import {expect} from "chai";
import {choice, Context, lexeme, many, map, Result, strict, join} from "../src";

const literal = lexeme(/[a-zA-Z0-9]+/);
const quoted = map(join(lexeme("\""), lexeme(/[^"]*/), lexeme("\"")), x => x[1]);
const parser = strict(many(choice(literal, quoted)));

describe("simpleString", () => {
  const dataset = [
    {
      name: "simple",
      input: `a b c`,
      output: ["a", "b", "c"],
    },
    {
      name: "quoted",
      input: `a "b c" d`,
      output: ["a", "b c", "d"],
    },
    {
      name: "twoQuoted",
      input: `a "b c" "d e f" g`,
      output: ["a", "b c", "d e f", "g"],
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

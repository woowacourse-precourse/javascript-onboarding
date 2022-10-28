// @ts-nocheck

const { LetterPairDeletingStack } = require("./problem2.lib.js");

describe("Letter Pair Deleting Stack", () => {
  test("trivial case", () => {
    const s = new LetterPairDeletingStack();
    expect(s.toString()).toBe("");
  });

  test.each(["abc", "adbdx"])(
    "should preserve words made with non-consecutive letters",
    (word) => {
      const stack = new LetterPairDeletingStack();
      for (const letter of word) {
        stack.push(letter);
      }
      expect(stack.toString()).toBe(word);
    }
  );

  test.each([
    ["abb", "a"],
    ["abccba", ""],
    ["accbba", ""],
  ])("stack-like behavior with same letter pairs", (input, output) => {
    const stack = new LetterPairDeletingStack();
    for (const letter of input) {
      stack.push(letter);
    }
    expect(stack.toString()).toBe(output);
  });
});

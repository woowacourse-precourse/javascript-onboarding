// @ts-nocheck

const {
  LetterPairDeletingStack,
  removeRepeatingLetters,
} = require("./problem2.lib.js");

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

describe("Removing repeating letters from text", () => {
  test.each(["", "a", "abc", "abcda"])(
    "should keep text with non-repeating letters",
    (text) => {
      const result = removeRepeatingLetters(text);
      expect(result).toBe(text);
    }
  );
  test.each([
    ["abb", "a"],
    ["acca", "aa"],
    ["xddd", "x"],
  ])("should remove consecutive letters", (input, expected) => {
    const actual = removeRepeatingLetters(input);
    expect(actual).toBe(expected);
  });
});
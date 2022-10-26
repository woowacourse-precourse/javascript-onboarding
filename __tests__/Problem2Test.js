const {
  checkInputError,
  deleteDuplicateWord,
} = require("../src/problem2.util");

describe("checkInputError", () => {
  it("is return true by short", () => {
    expect(checkInputError("")).toEqual(true);
  });
  it("is return true by long", () => {
    let temp = "";
    for (let i = 0; i <= 1000; i++) temp += "r";
    expect(checkInputError(temp)).toEqual(true);
  });
  it("is return false", () => {
    expect(checkInputError("browoanoommnaon")).toEqual(false);
  });
});

describe("deleteDuplicateWord", () => {
  it("is input 'oppa' output 'oa'", () => {
    expect(deleteDuplicateWord("oppa")).toEqual("oa");
  });
  it("is input 'opp' output 'o'", () => {
    expect(deleteDuplicateWord("opp")).toEqual("o");
  });
  it("is input 'oppaao' output 'oo'", () => {
    expect(deleteDuplicateWord("oppaao")).toEqual("oo");
  });
  it("is input 'oppoaao' output 'ooo'", () => {
    expect(deleteDuplicateWord("oppoaao")).toEqual("ooo");
  });
  it("is input 'oppp' output 'o'", () => {
    expect(deleteDuplicateWord("oppp")).toEqual("o");
  });
  it("is input 'o' output 'o'", () => {
    expect(deleteDuplicateWord("o")).toEqual("o");
  });
});

const { checkInputError } = require("../src/problem2.util");

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

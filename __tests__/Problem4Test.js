const {
  checkInputError,
  checkAlpha,
  transAlpha,
} = require("../src/problem4.util");

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
    expect(checkInputError("abc")).toEqual(false);
  });
});

describe("checkAlpha", () => {
  it("is input alphabet check return true", () => {
    expect(checkAlpha("a")).toEqual(true);
  });
  it("is input alphabet check return true", () => {
    expect(checkAlpha("Z")).toEqual(true);
  });
  it("is input alphabet check return false", () => {
    expect(checkAlpha("#")).toEqual(false);
  });
  it("is input alphabet check return false", () => {
    expect(checkAlpha(" ")).toEqual(false);
  });
});

describe("transAlpha", () => {
  it("is input trans big", () => {
    expect(transAlpha("A")).toEqual("Z");
  });
  it("is input trans small", () => {
    expect(transAlpha("a")).toEqual("z");
  });
});

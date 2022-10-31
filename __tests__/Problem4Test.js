const {
  checkInputError,
  checkAlpha,
  transAlpha,
  isSmall,
  isBig,
  transSmall,
  transBig,
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

describe("isSmall", () => {
  it("is check alpha that alpha small is True", () => {
    expect(isSmall("a")).toEqual(true);
  });
  it("is check alpha that alpha small is False", () => {
    expect(isSmall("A")).toEqual(false);
  });
  it("is check alpha that alpha small is False", () => {
    expect(isSmall("")).toEqual(false);
  });
});

describe("isBig", () => {
  it("is check alpha that alpha big is True", () => {
    expect(isBig("A")).toEqual(true);
  });
  it("is check alpha that alpha small is False", () => {
    expect(isBig("a")).toEqual(false);
  });
  it("is check alpha that alpha small is False", () => {
    expect(isBig("")).toEqual(false);
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

describe("transSmall", () => {
  it("is that small alpha trans", () => {
    expect(transSmall("a")).toEqual("z");
  });
  it("is that small alpha trans", () => {
    expect(transSmall("z")).toEqual("a");
  });
});

describe("transBig", () => {
  it("is that big alpha trans", () => {
    expect(transBig("A")).toEqual("Z");
  });
  it("is that small alpha trans", () => {
    expect(transBig("Z")).toEqual("A");
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

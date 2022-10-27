const {
  makeNickNameCombination,
  makeCountMapOfNickName,
  filterValue2OverOfMapToList,
  getTargetOfList,
  getNameIncludeIndex,
} = require("../src/problem6.util");

describe("makeNickNameCombination", () => {
  it("is split 2 word", () => {
    expect(makeNickNameCombination("제이엠")).toEqual(["제이", "이엠"]);
    expect(makeNickNameCombination("제이슨")).toEqual(["제이", "이슨"]);
  });
});

describe("makeCountMapOfNickName", () => {
  it("is make Count Map", () => {
    expect(makeCountMapOfNickName(["제이", "이엠", "제이", "이슨"])).toEqual({
      제이: 2,
      이엠: 1,
      이슨: 1,
    });
    expect(makeCountMapOfNickName(["제이", "이슨", "제이", "이슨"])).toEqual({
      제이: 2,
      이엠: 2,
    });
  });
});

describe("filterValue2OverOfMapToList", () => {
  it("is filter value over 2 of map", () => {
    expect(
      filterValue2OverOfMapToList({
        제이: 2,
        이엠: 2,
      })
    ).toEqual(["제이", "이엠"]);
    expect(
      filterValue2OverOfMapToList({
        제이: 2,
        이엠: 1,
        이슨: 1,
      })
    ).toEqual(["제이"]);
  });
});

describe("getNameIncludeIndex", () => {
  it("is get index that input arr includes nickname", () => {
    expect(getNameIncludeIndex(["제이슨", "제이엠"], "제이")).toEqual([0, 1]);
    expect(getNameIncludeIndex(["제이슨", "제이엠"], "이슨")).toEqual([0]);
  });
});

describe("getTargetOfList", () => {
  it("is get list that inputList's index ", () => {
    expect(getTargetOfList(["제이슨", "제이엠"], [0])).toEqual(["제이슨"]);
    expect(getTargetOfList(["제이슨", "제이엠"], [0, 1])).toEqual([
      "제이슨",
      "제이엠",
    ]);
  });
});

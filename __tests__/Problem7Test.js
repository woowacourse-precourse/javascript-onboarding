const {
  getScoreVisitor,
  getVisitorDeleteFriend,
  getScoreTogetherFriend,
  getUserFriend,
} = require("../src/problem7.util");

describe("getUserFriend", () => {
  it("is get user's friends", () => {
    expect(
      getUserFriend("mrko", [
        ["donut", "andole"],
        ["donut", "jun"],
        ["donut", "mrko"],
        ["shakevan", "andole"],
        ["shakevan", "jun"],
        ["shakevan", "mrko"],
      ])
    ).toEqual([
      ["donut", "mrko"],
      ["shakevan", "mrko"],
    ]);
    expect(
      getUserFriend("donut", [
        ["donut", "andole"],
        ["donut", "jun"],
        ["donut", "mrko"],
        ["shakevan", "andole"],
        ["shakevan", "jun"],
        ["shakevan", "mrko"],
      ])
    ).toEqual([
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
    ]);
  });
});

describe("getSetFriend", () => {
  it("is get set array that input list delete user", () => {
    expect(
      getScoreTogetherFriend("mrko", [
        ["donut", "mrko"],
        ["shakevan", "mrko"],
      ])
    ).toEqual({
      donut: 10,
      shakevan: 10,
    });
    expect(
      getScoreTogetherFriend("donut", [
        ["donut", "andole"],
        ["donut", "jun"],
        ["donut", "mrko"],
      ])
    ).toEqual({ mrko: 10, jun: 10, andole: 10 });
  });
});

describe("getVisitorDeleteFriend", () => {
  it("is visitor delete friend", () => {
    expect(getVisitorDeleteFriend(["bedi", "donut"], ["donut"])).toEqual([
      "bedi",
    ]);
  });
});

describe("getScoreVisitor", () => {
  it("is add visitor score", () => {
    expect(
      getScoreVisitor(["bedi"], { mrko: 10, jun: 10, andole: 10 })
    ).toEqual({ mrko: 10, jun: 10, andole: 10, bedi: 1 });
  });
});

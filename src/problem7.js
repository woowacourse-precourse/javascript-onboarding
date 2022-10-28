class ErrorCase {
  constructor(user, friends, visitors) {
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    this.checkAllError();
  }

  checkUserLimit() {
    return 1 <= this.user.length && this.user.length <= 30;
  }

  checkUserLower() {
    return this.user.match(/[a-z]/g).length === this.user.length;
  }

  checkUser() {
    return this.checkUserLimit() && this.checkUserLower();
  }

  checkFriendsLimit() {
    return 1 <= this.friends.length && this.friends.length <= 10000;
  }

  checkFriendsIDLimit() {
    return this.friends
      .flatMap((friend) => friend)
      .every((friend) => 1 <= friend.length && friend.length <= 30);
  }

  checkFriendIDListLimit() {
    return this.friends.every((friend) => friend.length === 2);
  }

  checkFriends() {
    return (
      this.checkFriendsLimit() &&
      this.checkFriendsIDLimit() &&
      this.checkFriendIDListLimit()
    );
  }

  checkVisitorsLimit() {
    return 0 <= this.visitors.length && this.visitors.length <= 10000;
  }

  checkAllError() {
    if (!this.checkUser()) {
      throw new Error("input 양식 중 user값에 오류가 발생하였습니다.");
    }

    if (!this.checkFriends()) {
      throw new Error("input 양식 중 friends값에 오류가 발생하였습니다.");
    }

    if (!this.checkVisitorsLimit()) {
      throw new Error("input 양식 중 visitor값에 오류가 발생하였습니다.");
    }
  }
}

function problem7(user, friends, visitors) {
  new ErrorCase(user, friends, visitors);

  return;
}

module.exports = problem7;

// 에러 케이스

// 사용자 아이디가 소문자로 이루어지지 않았을 때
// problem7(
//   "Arko",
//   [
//     ["Donut", "andole"],
//     ["donut", "jun"],
//     ["donut", "mrko"],
//     ["shakevan", "andole"],
//     ["shakevan", "jun"],
//     ["shakevan", "mrko"],
//   ],
//   ["bedi", "bedi", "donut", "bedi", "shakevan"]
// );

// user 길이가 30자가 넘을 때
// problem7(
//   "mrkodasljkfkljsadfkjlsajdflkjsadlkfjalsjdflasjfljasljflasjldfjlsa;jflkjasljfdldajslkdfjalsj",
//   [
//     ["donut", "andole"],
//     ["donut", "jun"],
//     ["donut", "mrko"],
//     ["shakevan", "andole"],
//     ["shakevan", "jun"],
//     ["shakevan", "mrko"],
//   ],
//   ["bedi", "bedi", "donut", "bedi", "shakevan"]
// );

// friends 길이 1이상 10000이하
// problem7("mrko", [], [("bedi", "bedi", "donut", "bedi", "shakevan")]);

// friends 원소 길이가 2인지
// problem7(
//   "mrko",
//   [
//     ["donut"],
//     ["donut", "jun"],
//     ["donut", "mrko"],
//     ["shakevan", "andole"],
//     ["shakevan", "jun"],
//     ["shakevan", "mrko"],
//   ],
//   ["bedi", "bedi", "donut", "bedi", "shakevan"]
// );

// friends 아이디 길이가 1이상 30이하 인지
// problem7(
//   "mrko",
//   [
//     ["", "andole"],
//     ["donut", "jun"],
//     ["donut", "mrko"],
//     ["shakevan", "andole"],
//     ["shakevan", "jun"],
//     ["shakevan", "mrko"],
//   ],
//   ["bedi", "bedi", "donut", "bedi", "shakevan"]
// );

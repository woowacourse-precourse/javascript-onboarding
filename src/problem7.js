function getOriginFriends(user, friends, originFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      console.log(friends[i]);
      // addFriendDecidedByotherSideIndex(friends[i], user, originFriends);
    }
  }
}

function problem7(user, friends, visitors) {
  let originFriends = [];
  getOriginFriends(user, friends, originFriends);
}

function testCode() {
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  );
}
testCode();
module.exports = problem7;

function getOriginFriends(user, friends, originFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (!friends[i].includes(user)) {
      continue;
    }
    addFriendDecidedByotherSideIndex(friends[i], user, originFriends);
  }
}

function addFriendDecidedByotherSideIndex(friend, otherSide, addToThisArray) {
  console.log(
    friend.indexOf(
      otherSide === 0
        ? addToThisArray.push(friend[1])
        : addToThisArray.push(friend[0])
    )
  );
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

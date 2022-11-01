function getFriendOfFriends(user, friends, originFriends, friendOfFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      continue;
    }
    checkFriendsLinkedWithUnknown(friends, originFriends, friendOfFriends, i);
  }
}

function checkFriendsLinkedWithUnknown(
  friends,
  originFriends,
  friendOfFriends,
  i
) {
  console.log(friendOfFriends);
  for (let j = 0; j < originFriends.length; j++) {
    if (!friends[i].includes(originFriends[j])) {
      continue;
    }
    addFriendDecidedByotherSideIndex(
      friends[i],
      originFriends[j],
      friendOfFriends
    );
  }
}

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
  let friendOfFriends = [];
  getOriginFriends(user, friends, originFriends);
  getFriendOfFriends(user, friends, originFriends, friendOfFriends);
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

function problem7(user, friends, visitors) {
  const result = [];

  const userFriend = getFriendUser(user, friends);
}

function getFriendUser(user, friends) {
  const friend = [];
  for (let i = 0; i < friends.length; i++) {
    const includeUser = friends[i].includes(user);
    if (includeUser) {
      console.log(String(friends[i]).replace(user && ",", ""));
      friend.push(String(friends[i]).replace(user && ",", ""));
    }
  }
  return friend;
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

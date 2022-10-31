function problem7(user, friends, visitors) {
  getFriendsAdjacencyList(friends);
  const userFriend = getFriendUser(user, friends);

  // console.log(userFriend);
}

function getFriendUser(user, friends) {
  const friend = [];
  for (let i = 0; i < friends.length; i++) {
    const includeUser = friends[i].includes(user);
    if (includeUser) {
      const temp = String(friends[i]).replace(user, "");
      friend.push(String(temp).replace(",", ""));
    }
  }
  console.log(friend);

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

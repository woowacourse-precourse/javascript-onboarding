function problem7(user, friends, visitors) {
  let allFriendsList = new Map();
  friends.map(([firstFriend, secondFriend]) => {
    allFriendsList.set(
      firstFriend,
      (allFriendsList.get(firstFriend) || []).concat(secondFriend)
    );
    allFriendsList.set(
      secondFriend,
      (allFriendsList.get(secondFriend) || []).concat(firstFriend)
    );
  });

  const scoreCollection = new Map();
  for (let i = 0; i < allFriendsList.get(user).length; i++) {
    allFriendsList.get(allFriendsList.get(user)[i]).map((friend) => {
      if (!allFriendsList.get(user).includes(friend) && friend !== user) {
        scoreCollection.set(friend, scoreCollection.get(friend) + 10 || 10);
      }
    });
  }

console.log(
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
  )
);

module.exports = problem7;
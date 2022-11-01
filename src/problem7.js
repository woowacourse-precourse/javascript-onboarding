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
function problem7(user, friends, visitors) {
  let friendsList = getUserFriends(user, friends);
  console.log(friendsList);
}

function getUserFriends(user, friends) {
  let friendsList = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0].includes(user) || friends[i][1].includes(user)) {
      friendsList.push(friends[i][0]);
      friendsList.push(friends[i][1]);
    }
  }
  let exceptUser = friendsList.filter((element) => element !== user);
  return exceptUser;
}

module.exports = problem7;
let user = "mrko";
let friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
problem7(user, friends, visitors);

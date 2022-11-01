function problem7(user, friends, visitors) {
  let friendsList = getUserFriends(user, friends);
  let withFriendsList = getWithFriends(user, friends, friendsList);
  console.log(withFriendsList);
}

function getUserFriends(user, friends) {
  let friendsList = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0].includes(user) || friends[i][1].includes(user)) {
      friendsList.push(friends[i][0]);
      friendsList.push(friends[i][1]);
    }
  }
  friendsList = friendsList.filter((element) => element !== user);
  return friendsList;
}

function getWithFriends(user, friends, userFriends) {
  let withFriends = [];
  for (let j = 0; j < friends.length; j++) {
    for (let k = 0; k < userFriends.length; k++) {
      if (friends[j].includes(userFriends[k])) {
        withFriends.push(
          friends[j].filter((element) => element !== userFriends[k])
        );
      }
    }
  }
  withFriends = withFriends
    .toString()
    .split(",")
    .filter((element) => element !== user);
  let set = new Set(withFriends);
  withFriends = [...set];
  return withFriends;
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

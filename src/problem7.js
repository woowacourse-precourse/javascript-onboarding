function problem7(user, friends, visitors) {
  let friendsList = getUserFriends(user, friends);
  let withFriendsList = getWithFriends(user, friends, friendsList);
  let scoreArr = scoringFriends(withFriendsList);  // [ [ 'andole', 20 ], [ 'jun', 20 ] ] 출력
  return scoreArr;
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

function scoringFriends(withFriends) {
  let scoreList = Array.from(Array(withFriends.length), () =>
    Array(2).fill(null)
  );
  for (let l = 0; l < withFriends.length; l++) {
    scoreList[l][0] = withFriends[l];
    for (let m = 0; m < withFriends.length; m++) {
      scoreList[m][1] += 10;
    }
  }
  return scoreList;
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

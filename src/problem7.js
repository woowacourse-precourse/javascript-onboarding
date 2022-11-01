function problem7(user, friends, visitors) {
  let friendsList = getUserFriends(user, friends);
  let withFriendsList = getWithFriends(user, friends, friendsList);
  let scoreArr = scoringFriends(withFriendsList); // [ [ 'andole', 20 ], [ 'jun', 20 ] ] 출력
  return scoreArr;
}

// friends 배열을 돌며, user와 친구인 사람을 배열에 추가하는 함수
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

// user와 친구인 사람의 친구를 찾는 함수
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

// 함께 아는 친구에게 점수를 부여하는 함수
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

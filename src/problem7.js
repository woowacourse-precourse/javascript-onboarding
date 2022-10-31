function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function calScore(user, friends, visitors) {
  const friendsConnection = getConnection(friends);
  const friendsScore = makeDict(user, friends);

  let friendsTotalScore = checkFriend(user, friendsScore, friendsConnection);
  friendsTotalScore = checkVisited(friendsTotalScore, visitors);
  
  return friendsTotalScore;
}

function getConnection(friends) {
  const friendsConnection = {};

  for (let i = 0; i < friends.length; i++) {
    const friendA = friends[i][0];
    const friendB = friends[i][1];

    if (!Object.keys(friendsConnection).includes(friendA)) friendsConnection[friendA] = new Set();
    if (!Object.keys(friendsConnection).includes(friendB)) friendsConnection[friendB] = new Set();

    friendsConnection[friendA].add(friendB);
    friendsConnection[friendB].add(friendA);
  }

  return friendsConnection;
}

function makeDict(user, friends) {
  const friendsScoreDict = {};

  for (let i = 0; i < friends.length; i++) {
    const friendName1 = friends[i][0];
    const friendName2 = friends[i][1];

    if (!Object.keys(friendsScoreDict).includes(friendName1) && friendName1 != user) friendsScoreDict[friendName1] = 0;
    if (!Object.keys(friendsScoreDict).includes(friendName2) && friendName2 != user) friendsScoreDict[friendName2] = 0;
  }

  return friendsScoreDict;
}

function checkFriend(user, friendsScoreDict, friendsConnection) {
  const userFriend = friendsConnection[user];

  userFriend.forEach((item) => {
    const friendsFriends = friendsConnection[item];

    friendsFriends.forEach((item) => {
      if (item != user && !friendsConnection[item].has(user)) friendsScoreDict[item] += 10;
    })
  })

  return friendsScoreDict;
}

function checkVisited(friendsScoreDict, visitors) {
  visitors.forEach((item) => {
    if (friendsScoreDict[item] == undefined) friendsScoreDict[item] = 0;
    friendsScoreDict[item] += 1
  });

  return friendsScoreDict;
}

function sortFriends(usersFriendsSet, friendsTotalScore) {
  const sortedFriends = [];
  const recommendedFriends = [];

  for (const name in friendsTotalScore) {
    if (!usersFriendsSet.has(name)) sortedFriends.push([name, friendsTotalScore[name]]);
  }

  sortedFriends.sort((a, b) => {
    if (a[1] == b[1]) { // 만약, 비교하는 두 점수가 같다면 이름을 오름차순으로 정렬
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      return 0;
    };

    return b[1] - a[1]; // 비교하는 두 점수가 다르다면 점수를 내림차순으로 정렬
  });

  for (let i = 0; i < sortedFriends.length; i++) { // 정렬된 점수 딕셔너리에서 점수가 0이 아니라면 정답 배열에 추가
    if (sortedFriends[i][1] != 0) recommendedFriends.push(sortedFriends[i][0]);

    if (recommendedFriends.length == 5) break; // 정답 배열에 추가하는 과정 중, 길이가 5가 된다면 for문 중지
  }

  return recommendedFriends;
}

module.exports = problem7;

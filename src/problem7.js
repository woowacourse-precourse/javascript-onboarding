function problem7(user, friends, visitors) {
  var answer;

  if (!validUser(user)) throw new Error("잘못된 user입니다.");
  if (!validFriends(friends)) throw new Error("잘못된 friends입니다.");
  if (!validVisitors(visitors)) throw new Error("잘못된 visitors입니다.");

  const friendsTotalScore = calScore(user, friends, visitors);
  const userFriendSet = getConnection(friends)[user];
  answer = sortFriends(userFriendSet, friendsTotalScore);
  return answer;
}


/**
 * 추천 점수 계산 메소드
 * parameter: 입력으로 주어지는 user, friends, visitors
 * return: 각 사용자의 아이디와 점수로 구성된 딕셔너리
 */
function calScore(user, friends, visitors) {
  const friendsConnection = getConnection(friends);
  const friendsScore = makeDict(user, friends);

  let friendsTotalScore = checkFriend(user, friendsScore, friendsConnection);
  friendsTotalScore = checkVisited(friendsTotalScore, visitors);
  
  return friendsTotalScore;
}
// 각 사용자의 친구 관계를 딕셔너리로 만드는 메소드
function getConnection(friends) {
  const friendsConnection = {};

  for (let i = 0; i < friends.length; i++) {
    const friendA = friends[i][0];
    const friendB = friends[i][1];

    if (!validID(friendA)) throw new Error("잘못된 ID가 포함되어 있습니다.");
    if (!validID(friendB)) throw new Error("잘못된 ID가 포함되어 있습니다.");

    if (!Object.keys(friendsConnection).includes(friendA)) friendsConnection[friendA] = new Set();
    if (!Object.keys(friendsConnection).includes(friendB)) friendsConnection[friendB] = new Set();

    friendsConnection[friendA].add(friendB);
    friendsConnection[friendB].add(friendA);
  }

  return friendsConnection;
}
// 추천 점수 계산에 사용되는 사용자 이름(key), 사용자 점수(value)로 구성된 딕셔너리를 생성하는 메소드
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
// 사용자와 함께 아는 친구의 수에 따른 점수 계산 메소드
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
// 사용자 타임라인 방문 기록에 따른 점수 계산 메소드
function checkVisited(friendsScoreDict, visitors) {
  visitors.forEach((item) => {
    if (friendsScoreDict[item] == undefined) friendsScoreDict[item] = 0;
    friendsScoreDict[item] += 1
  });

  return friendsScoreDict;
}


/**
 * 각 점수에 따라 정렬 후 추천 친구를 return하는 메소드
 * Parameter: user와 친구관계인 사용자 집합, 각 사용자의 아이디와 점수로 구성된 딕셔너리
 * return: 사용자의 점수와 이름으로 정렬된 추천친구 배열
 */
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


/**
 * 예외 처리
 */
function validUser(user) {
  return 1 <= user.length && user.length <= 30 && typeof (user) == "string";
}

function validFriends(friends) {
  return 1 <= friends.length && friends.length <= 10000 && typeof (friends) == "object";
}

function validVisitors(visitors) {
  return 0 <= visitors.length && visitors.length <= 10000 && typeof (visitors) == "object";
}

function validID(id) {
  const reg = /^[a-z]*$/;

  return reg.test(id) && 1 <= id.length && id.length <= 30 && typeof (id) == "string";
}

module.exports = problem7;

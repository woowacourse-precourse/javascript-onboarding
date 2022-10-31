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
 * @param {string} user user
 * @param {Array} friends 친구 관계를 담고있는 2차원 배열
 * @param {string[]} visitors user 타임라인 방문자 배열
 * @returns {object} 각 사용자별 점수를 담고있는 딕셔너리
 */
function calScore(user, friends, visitors) {
  const friendsConnection = getConnection(friends);
  const friendsScore = makeDict(user, friends);

  let friendsTotalScore = checkFriend(user, friendsScore, friendsConnection);
  friendsTotalScore = checkVisited(friendsTotalScore, visitors);
  
  return friendsTotalScore;
}

/**
 * 각 사용자의 친구 관계를 딕셔너리로 만드는 메소드
 * @param {Array} friends 친구 관계를 담고있는 2차원 배열
 * @returns {object} key: 사용자 이름, value: 해당 사용자의 친구들로 구성된 집합으로 구성된 딕셔너리
 */
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

/**
 * 추천 점수 계산용 딕셔너리를 생성하는 메소드
 * @param {string} user user
 * @param {Array} friends 친구 관계를 담고있는 2차원 배열
 * @returns {object} key: 사용자 이름, value: 0로 구성된 딕셔너리
 */
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

/**
 * 사용자와 함께 아는 친구의 수에 따른 점수 계산 메소드
 * @param {string} user user
 * @param {object} friendsScoreDict 각 사용자별 점수를 담고있는 딕셔너리
 * @param {object} friendsConnection 각 사용자별 친구관계로 구성된 딕셔너리
 * @returns {object} 각 사용자별 점수를 담고있는 딕셔너리
 */
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

/**
 * 사용자 타임라인 방문 기록에 따른 점수 계산 메소드
 * @param {object} friendsScoreDict 각 사용자별 점수를 담고있는 딕셔너리
 * @param {string[]} visitors user 타임라인 방문자 배열
 * @returns 
 */
function checkVisited(friendsScoreDict, visitors) {
  visitors.forEach((item) => {
    if (friendsScoreDict[item] == undefined) friendsScoreDict[item] = 0;
    friendsScoreDict[item] += 1
  });

  return friendsScoreDict;
}


/**
 * 정렬 후 추천 친구를 return하는 메소드
 * @param {Set} usersFriendsSet user의 친구로 구성된 집합
 * @param {object} friendsTotalScore 각 사용자별 총점을 담고있는 딕셔너리
 * @returns {string[]}사용자의 점수와 이름으로 정렬된 추천친구 배열
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



// 예외 처리
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

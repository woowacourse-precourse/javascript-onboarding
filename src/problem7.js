/*
  구현할 기능 목록
  [O] friends 배열에서 주어지는 사람들의 친구 리스트를 Map 객체(key: 이름, value: friends 배열)로 생성하는 기능 | 함수명 : initFriendsList
  [O] frineds 배열어서 주이지는 사람들의 score 리스트를 Map 객체(key: 이름, value: score)로 생성하는 기능 | 함수명 : initScoreList
  [O] 해당 사람이 user의 friend인지 확인하는 기능 | 함수명 : isFriendWithUser
  [O] user와 함께 아는 친구인 경우가 있는 사람인 경우, 아는 친구 한명 당 score를 10씩 증가시키는 기능 | 함수명 : addScoreForMutualFriend
  [O] user의 타임라인에 방문한 사람인 경우, 방문 횟수 당 score를 1씩 증가시키는 기능 | 함수명 : addScoreForVisiting
  [O] Map객체를 배열로 convert하는 기능 | 함수명 : convertMapToArr
  [ ] score가 0일 때 리스트에서 제거하는 기능
  [ ] 추천 친구를 점수가 가장 높은 순, 점수가 같은 경우 이름 순으로 정렬하는 기능
  [ ] 리스트에서 사람 이름만 추출하여 배열로 반환하는 기능
  [ ] 리스트를 앞에서부터 최대 5개로 자르는 기능
*/

function problem7(user, friends, visitors) {
  let answer = 0;
  const friendsList = new Map();
  const scoreList = new Map();

  friends.forEach((friend) => {
    let [person1, person2] = friend;
    initFriendsList(friendsList, person1, person2);
    initFriendsList(friendsList, person2, person1);
    initScoreList(scoreList, person1, user);
    initScoreList(scoreList, person2, user);
  });

  let userFriendsList = friendsList.get(user);

  for (const person of scoreList.keys()) {
    addScoreForMutualFriend(friendsList, scoreList, userFriendsList, person);
  }

  visitors.forEach((visitor) => {
    addScoreForVisiting(scoreList, userFriendsList, visitor);
  });

  let convertedScoreList = convertMapToArr(scoreList);
}

function initFriendsList(friendsList, person1, person2) {
  if (!friendsList.has(person1)) {
    friendsList.set(person1, [person2]);
  } else {
    friendsList.set(person1, [...friendsList.get(person1), person2]);
  }
}

function initScoreList(scoreList, person, user) {
  if (user !== person && !scoreList.has(person)) {
    scoreList.set(person, 0);
  }
}

function isFriendWithUser(userFriendsList, person) {
  return userFriendsList.includes(person);
}

function addScoreForMutualFriend(friendsList, scoreList, userFriendsList, person) {
  if (isFriendWithUser(userFriendsList, person)) return;
  friendsList.get(person).forEach((el) => {
    if (userFriendsList.includes(el)) {
      scoreList.set(person, scoreList.get(person) + 10);
    }
  });
}

function addScoreForVisiting(scoreList, userFriendsList, visitor) {
  if (isFriendWithUser(userFriendsList, visitor)) return;
  if (!scoreList.has(visitor)) {
    scoreList.set(visitor, 1);
  } else {
    scoreList.set(visitor, scoreList.get(visitor) + 1);
  }
}

function convertMapToArr(scoreList) {
  return Array.from(scoreList);
}

module.exports = problem7;

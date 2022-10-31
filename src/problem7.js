function problem7(user, friends, visitors) {
  let saveScore = {};
  let userFriends = [];

  // user의 친구들 구하기
  userFriends = getUserFriends(friends, userFriends);

  // 친구가 아닌 일반 방문자 객체 저장
  saveScore = getOnlyVisitor(visitors, userFriends, saveScore);

  // 10점 줄 친구 저장
  saveScore = getTenPointsFriends(userFriends, friends, user, saveScore);

  // 이름 => 값 순서로 정렬
  const result = ValueNameSort(saveScore);

  return result;
}

function getUserFriends(friends, userFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (!userFriends.includes(friends[i])) userFriends.push(friends[i][0]);

    userFriends = [...new Set(userFriends)];
  }

  return userFriends;
}

function getOnlyVisitor(visitors, userFriends, saveScore) {

  for (let i = 0; i < visitors.length; i++) {
    let visitorName = visitors[i];

    if (!userFriends.includes(visitorName)) {
      saveScore[visitorName] = (saveScore[visitorName] || 0) + 1;
    }
  }

  return saveScore;
}

function getTenPointsFriends(userFriends, friends, user, saveScore) {

  for (let i = 0; i < userFriends.length; i++) {
    saveScore = saveFriends(userFriends[i], friends, user, saveScore);
  }

  return saveScore;
}

function saveFriends(userFriends, friends, user, saveScore) {

  for (let i= 0; i < friends.length; i++) {
    let userFriend = friends[i][0];
    let otherFriend = friends[i][1];

    if (userFriends === userFriend && user !== otherFriend) {
      saveScore[otherFriend] = (saveScore[otherFriend] || 0) + 10;
    }
  }

  return saveScore;
}

function ValueNameSort(saveScore) {
  // 이름 기준 정렬, Key(이름)을 우선적으로 정렬
  const keySorted = Object.fromEntries(Object.entries(saveScore).sort(([a], [b]) => a < b ? -1 : 1));
  // 값 기준 정렬, 이름을 우선적으로 정렬해 값이 같아도 정렬된 이름 순서대로
  const valueSorted = Object.keys(keySorted).sort((a, b) => saveScore[b] - saveScore[a]);

  return valueSorted;
}

module.exports = problem7;

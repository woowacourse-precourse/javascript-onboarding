function isLowerCaseOnly(word) {
  for (let i = 0; i < word.length; ++i) {
    if (
      word.charCodeAt(i) < 'a'.charCodeAt(0) ||
      word.charCodeAt(i) > 'z'.charCodeAt(0)
    )
      return false;
  }
  return true;
}

function isException(user, friends) {
  if (
    !(typeof user === 'string') ||
    user.length > 30 ||
    user.length < 1 ||
    !Array.isArray(friends)
  )
    return true;
  for (let i = 0; i < friends.length; ++i) {
    if (
      !Array.isArray(friends[i]) ||
      friends[i].length !== 2 ||
      !(typeof friends[i][0] === 'string') ||
      friends[i][0].length > 30 ||
      friends[i][0].length < 1 ||
      !isLowerCaseOnly(friends[i][0]) ||
      !(typeof friends[i][1] === 'string') ||
      friends[i][1].length > 30 ||
      friends[i][1].length < 1 ||
      !isLowerCaseOnly(friends[i][1])
    )
      return true;
  }
  return false;
}

function checkMap(map, friends, user) {
  const isFriend = friends[0] === user || friends[1] === user;

  if (map.has(friends[0])) {
    if (!map.get(friends[0]).isFriend && isFriend)
      map.get(friends[0]).isFriend = true;
    map.get(friends[0]).friends.push(friends[1]);
  } else {
    map.set(friends[0], {
      isFriend: isFriend,
      friends: [friends[1]],
    });
  }
  if (map.has(friends[1])) {
    if (!map.get(friends[1]).isFriend && isFriend)
      map.get(friends[1]).isFriend = true;
    map.get(friends[1]).friends.push(friends[0]);
  } else {
    map.set(friends[1], {
      isFriend: isFriend,
      friends: [friends[0]],
    });
  }
}

function calFriendsScore(map, friends) {
  let score = 0;

  for (let i = 0; i < friends.length; i++) {
    if (map.has(friends[i]) && map.get(friends[i]).isFriend === true)
      score += 10;
  }
  return score;
}

function calVisitorsScore(map, visitors) {
  for (let i = 0; i < visitors.length; i++) {
    if (map.has(visitors[i])) map.get(visitors[i]).score += 1;
    else
      map.set(visitors[i], {
        isFriend: false,
        friends: [],
        score: 1,
      });
  }
}

function calIdNScore(map, idNScore) {
  map.forEach((value, key) => {
    if (value.isFriend === false) idNScore.push([key, value.score]);
  });
  idNScore.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });
}

function problem7(user, friends, visitors) {
  if (isException(user, friends)) return 'isException';
  const map = new Map();
  const idNScore = [];
  const answer = [];

  for (let i = 0; i < friends.length; ++i) {
    checkMap(map, friends[i], user);
  }
  map.forEach((value) => {
    value.score = calFriendsScore(map, value.friends);
  });
  calVisitorsScore(map, visitors);
  calIdNScore(map, idNScore);
  for (let i = 0; i < idNScore.length && i < 5; i++) {
    if (idNScore[i][1] > 0) answer.push(idNScore[i][0]);
  }
  return answer;
}

module.exports = problem7;

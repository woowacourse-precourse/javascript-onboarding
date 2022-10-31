/**
 * user의 친구 목록을 반환합니다.
 * @param {string} user 친구 관계를 알고 싶은 사용자 아이디입니다.
 * @param {string[][]} friends 친구 관계를 담은 이차원 배열입니다.
 * @returns {string[]} user와 친구인 사람들의 배열입니다.
 */
function getFriends(user, friends) {
  return friends
    .map(([f1, f2]) => {
      if ([f1, f2].includes(user)) {
        return f1 === user ? f2 : f1;
      }
    })
    .filter((f) => f);
}

/**
 * 친구가 user와 함께 아는 친구인지를 판별합니다.
 * @param {string[]} usersFriends user의 친구 목록입니다.
 * @param {string} friend user와 함께 아는 친구인지를 알고 싶은 사용자 아이디입니다.
 * @returns {boolean} 함께 아는 친구라면 true, 아니라면 false를 반환합니다.
 */
function isFriendsOfUser(usersFriends, friend) {
  for (const u of usersFriends) {
    if (friend === u) {
      return true;
    }
  }
  return false;
}

/**
 * friends와 visitors 배열 속 사람들의 친구 관계를 구합니다.
 * @param {string[]} usersFriends user의 친구 목록입니다.
 * @param {string[][]} friends 친구 관계를 담은 이차원 배열입니다.
 * @param {string[]} visitors 사용자 타임 라인 방문 기록입니다.
 * @returns {string[]} 사람들의 user와 함께 아는 친구 관계 리스트를 반환합니다.
 */
function getFriendsList(usersFriends, friends, visitors) {
  const friendsList = {};

  // friends 처리
  for (const [f1, f2] of friends) {
    if (friendsList[f1] && friendsList[f2]) {
      continue;
    } else {
      friendsList[f1] = getFriends(f1, friends).filter((f) =>
        isFriendsOfUser(usersFriends, f)
      );
      friendsList[f2] = getFriends(f2, friends).filter((f) =>
        isFriendsOfUser(usersFriends, f)
      );
    }
  }

  // visitors 처리
  for (const v of visitors) {
    if (friendsList[v]) {
      continue;
    } else {
      friendsList[v] = getFriends(v, friends);
    }
  }

  return friendsList;
}

/**
 * 점수 기준 내림차순으로 정렬하여 최대 5명까지의 배열을 반환합니다.
 * @param {object} score 사용자들의 점수를 담은 객체입니다.
 * @returns {string[]} 정렬된 사용자 아이디 배열입니다.
 */
function getSortedList(score) {
  const sortableList = [];

  for (const friend in score) {
    // 점수가 0인 경우 추천 X
    if (score[friend] > 0) {
      sortableList.push([friend, score[friend]]);
    }
  }

  sortableList.sort((a, b) => {
    if (b[1] === a[1]) {
      if (a[0] > b[0]) return 1;
      else if (a[0] < b[0]) return -1;
      else return 0;
    } else return b[1] - a[1];
  });

  // 최대 5명까지만 추천
  return sortableList.map(([id]) => id).slice(0, 5);
}

function problem7(user, friends, visitors) {
  const usersFriends = getFriends(user, friends);
  const friendsList = getFriendsList(
    usersFriends,
    friends.filter((f) => !f.includes(user)),
    visitors
  );
  const score = {};
  let answer = [];

  // 점수: 사용자와 함께 아는 친구의 수 = 10점
  for (const friend in friendsList) {
    score[friend] = friendsList[friend] ? friendsList[friend].length * 10 : 0;
  }

  // 점수: 사용자의 타임 라인에 방문한 횟수 = 1점
  for (const v of visitors) {
    // 이미 user와 친구인 경우 점수 X
    if (usersFriends.includes(v)) {
      score[v] = 0;
    } else {
      score[v]++;
    }
  }

  answer = getSortedList(score);

  return answer;
}

module.exports = problem7;

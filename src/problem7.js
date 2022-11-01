function problem7(user, friends, visitors) {
  const friendsOfUser = getFriendsOfUser(user, friends);
  const countsOfCommonFriends = getCountsOfCommonFriends(
    user,
    friendsOfUser,
    friends
  );
  const scores = getScores(countsOfCommonFriends, visitors);
  return getRecommendedList(scores, friendsOfUser);
}

/**
 * user와 친구인 사용자 목록을 반환한다.
 * @param {string} user
 * @param {string[][]} friends [['one_of_user', 'other_user'], ...]
 * @returns {Set<string>}
 */
function getFriendsOfUser(user, friends) {
  const firstDegree = new Set();
  for (let i = 0; i < friends.length; i++) {
    const [from, to] = friends[i];
    if (from === user) {
      firstDegree.add(to);
    }
    if (to === user) {
      firstDegree.add(from);
    }
  }
  return firstDegree;
}

/**
 * 함께 아는 친구의 수를 표시하는 객체를 반환한다.
 * @param {*} user
 * @param {Set<string>} friendsOfUser
 * @param {set} friends
 * @returns {{ [key: string]: number }} { user : number_of_common_freinds }
 */
function getCountsOfCommonFriends(user, friendsOfUser, friends) {
  const counts = {};
  for (let i = 0; i < friends.length; i++) {
    const [from, to] = friends[i];
    if (friendsOfUser.has(from) && user !== to) {
      counts[to] = counts[to] ? counts[to] + 1 : 1;
    }
    if (friendsOfUser.has(to) && user !== from) {
      counts[from] = counts[from] ? counts[from] + 1 : 1;
    }
  }
  return counts;
}

/**
 * user와 친구인 사용자 목록과 user에게 방문한 사용자 정보를 바탕으로 점수 합산 값을 구하여 반환한다.
 * @param {{ [key: string]: number }} countsOfCommonFriends { user : number_of_common_freinds }
 * @param {string[]} visitors
 * @returns
 */
function getScores(countsOfCommonFriends, visitors) {
  const scoresForCommonFriends = getScoresForCommonFriends(
    countsOfCommonFriends
  );
  const scoresForVisting = getScoresForVisting(visitors);
  return sumScores(scoresForCommonFriends, scoresForVisting);
}

/**
 * 함께 아는 친구 수에 따른 점수를 구한다.
 * @param {{ [key: string]: number }} common { user : number_of_common_freinds }
 * @returns {{ [key: string]: number }} { user: score }
 */
function getScoresForCommonFriends(common) {
  const scores = {};
  for (let key in common) {
    scores[key] = common[key] * 10;
  }
  return scores;
}

/**
 * 방문 횟수에 따른 점수를 구한다.
 * @param {string[]} visitors 방문자 아이디 목록을 담고 있는 배열
 * @returns {{ [key: string]: number }} { user: score }
 */
function getScoresForVisting(visitors) {
  const scores = {};
  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    scores[visitor] = scores[visitor] ? scores[visitor] + 1 : 1;
  }
  return scores;
}

/**
 * 두 scores를 합친 결과를 반환한다.
 * @param {{ [key: string]: number }} scores1 { user: score }
 * @param {{ [key: string]: number }} scores2 { user: score }
 * @return {{ [key: string]: number }}
 */
function sumScores(scores1, scores2) {
  const total = {};
  for (let user in scores1) {
    total[user] = scores1[user];
  }
  for (let user in scores2) {
    total[user] = total[user] ? total[user] + scores2[user] : scores2[user];
  }
  return total;
}

/**
 * 점수를 바탕으로 친구 추천 목록을 만든다.
 *   - 이미 친구인 유저는 추천 목록에 포함하지 않는다.
 *   - 입력된 추천 목록을 점수가 높은 순으로 정렬하여 반환한다. 점수가 같으면 알파벳 순서로 정렬한다.
 *   - 최대 5명까지만 추천 목록에 포함한다.
 * @param {{ [key: string]: number }} scores { user: score }
 * @param {Set<string>} friendsOfUser
 * @returns {string[]}
 */
function getRecommendedList(scores, friendsOfUser) {
  const recommendedList = getTotalRecommendedList(scores, friendsOfUser);
  const sortedList = sortRecommendedList(recommendedList);
  const slicedList = sortedList.slice(0, 5);
  return slicedList.map((item) => item.user);
}

/**
 * 점수를 바탕으로 친구 추천 목록을 만든다. 이미 친구인 유저는 추천 목록에 포함하지 않는다.
 * @param {{ [key: string]: number }} scores { user: score }
 * @param {Set<string>} friendsOfUser
 * @returns {Array<{ user: string, score: number }>}
 */
function getTotalRecommendedList(scores, friendsOfUser) {
  const recommendedList = [];
  for (let user in scores) {
    if (!friendsOfUser.has(user)) {
      recommendedList.push({ user: user, score: scores[user] });
    }
  }
  return recommendedList;
}

/**
 * 입력된 추천 목록을 점수가 높은 순으로 정렬하여 반환한다. 점수가 같으면 알파벳 순서로 정렬한다.
 * @param {Array<{ user: string, score: number }>} recommendedList
 * @returns {Array<{ user: string, score: number }>}
 */
function sortRecommendedList(recommendedList) {
  return recommendedList.sort((a, b) => {
    if (a.score === b.score) {
      return a.user.localeCompare(b.user);
    } else {
      return a.score > b.score;
    }
  });
}

module.exports = problem7;

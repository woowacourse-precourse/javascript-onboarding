const SCORE = {
  ACQUAINTANCE: 10,
  VISITED_FRIEND: 1,
};
const MAX_FRIENDS_TO_SHOW = 5;

function problem7(user = '', friends = [], visitors = []) {
  const beFriends = {};
  const alreadyFriends = getAlreadyFriends(user, friends);

  for (const [idA, idB] of friends) {
    if (!alreadyFriends.has(idA)) {
      if (beFriends[idA]) beFriends[idA] += SCORE.ACQUAINTANCE;
      else beFriends[idA] = SCORE.ACQUAINTANCE;
      continue;
    } else if (!alreadyFriends.has(idB)) {
      if (beFriends[idB]) beFriends[idB] += SCORE.ACQUAINTANCE;
      else beFriends[idB] = SCORE.ACQUAINTANCE;
      continue;
    }
  }

  for (const visitor of visitors) {
    if (alreadyFriends.has(visitor)) continue;
    if (beFriends[visitor]) beFriends[visitor] += SCORE.VISITED_FRIEND;
    else beFriends[visitor] = SCORE.VISITED_FRIEND;
  }

  const sortedFriends = Object.entries(beFriends).sort(
    ([nameA, scoreA], [nameB, scoreB]) => {
      if (scoreA === scoreB) return sortByAlphabetically(nameA, nameB);
      return scoreB - scoreA;
    }
  );

  return sortedFriends
    .map(([name, score]) => name)
    .slice(0, MAX_FRIENDS_TO_SHOW);
}

/** 이미 친구 관계인 사용자 탐색 */
const getAlreadyFriends = (user = '', friends = []) => {
  const friendSet = new Set();
  friends.forEach(([idA, idB]) => {
    if (idA === user || idB === user) {
      friendSet.add(idA);
      friendSet.add(idB);
    }
  });
  return friendSet;
};

/** 대소문자 관계 없이 문자열 정렬 */
const sortByAlphabetically = (a = '', b = '') => {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (upperCaseA > upperCaseB) return 1;
  if (upperCaseA < upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
};

module.exports = problem7;

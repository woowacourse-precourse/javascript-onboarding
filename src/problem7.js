const SCORE = {
  ACQUAINTANCE: 10,
  VISITED_FRIEND: 1,
};
const MAX_FRIENDS_TO_SHOW = 5;

const sortByAlphabetically = (a = '', b = '') => {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (upperCaseA > upperCaseB) return 1;
  if (upperCaseA < upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
};

function problem7(user = '', friends = [], visitors = []) {
  const beFriends = {};
  const alreadyFriends = new Set();

  for (const [alreadyFriend, beFriend] of friends) {
    if (beFriend === user) continue;

    alreadyFriends.add(alreadyFriend);
    if (beFriends[beFriend] !== undefined) {
      beFriends[beFriend] = beFriends[beFriend] + SCORE.ACQUAINTANCE;
    } else beFriends[beFriend] = SCORE.ACQUAINTANCE;
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

module.exports = problem7;

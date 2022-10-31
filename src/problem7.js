function problem7(user, friends, visitors) {
  let friendHash = setFriends(friends, new Map());
  let scores = getFriendsScores(user, friendHash, new Map());
  for (const friends of visitors) {
    scores.get(friends) === undefined
      ? scores.set(friends, 1)
      : scores.set(friends, scores.get(friends) + 1);
  }
function setFriends(friend, hash) {
  for (const [a, b] of friend) {
    hash = set(hash, a, b);
    hash = set(hash, b, a);
  }
  return hash;

  function set(hash, a, b) {
    if (hash.get(a) !== undefined) hash.set(a, [...hash.get(a), b]);
    else hash.set(a, [b]);
    return hash;
  }
}
function getFriendsScores(user, friendHash, scoreHash) {
  for (const key of friendHash.keys()) {
    scoreHash.set(key, 0);
  }
  if (friendHash.get(user) === undefined) return scoreHash;

  for (const friend of friendHash.get(user)) {
    for (const someone of friendHash.get(friend)) {
      scoreHash.get(someone) === undefined
        ? scoreHash.set(someone, 10)
        : scoreHash.set(someone, scoreHash.get(someone) + 10);
    }
  }
  return scoreHash;
}

module.exports = problem7;

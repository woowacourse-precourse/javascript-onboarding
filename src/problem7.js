function problem7(user, friends, visitors) {
  let friendHash = setFriends(friends, new Map());
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
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  // keep track of user's friends
  const usersFriends = new Set();
  for (let friend of friends) {
    if (!friend.includes(user)) continue;
    if (friend[0] == user) {
      usersFriends.add(friend[1]);
    } else if (friend[1] == user) {
      // 'else if' rather than 'else'.
      usersFriends.add(friend[0]); // ...because 'friends' may contain [A, A]?
    }
  }

  // update scores for common friends
  const scores = new Map();
  for (let friend of friends) {
    if (friend.includes(user)) continue;
    if (usersFriends.has(friend[0])) {
      scores.set(friend[1], getDefaultValue(scores, friend[1]) + 10);
    }
    if (usersFriends.has(friend[1])) {
      scores.set(friend[0], getDefaultValue(scores, friend[0]) + 10);
    }
  }

  // update scores for visitors
  for (let visitor of visitors) {
    if (usersFriends.has(visitor)) continue;
    scores.set(visitor, getDefaultValue(scores, visitor) + 1);
  }

  return Array.from(scores.keys())
    .sort()
    .sort((a, b) => scores.get(b) - scores.get(a))
    .slice(0, 5);
}

function getDefaultValue(map, key) {
  return map.get(key) || 0;
}

module.exports = problem7;

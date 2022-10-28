function problem7(user, friends, visitors) {
  const recommendationScore = new Map();
  const friendsSet = new Set();

  for (let i = 0; i < friends.length; i += 1) {
    if (friendsSet.has(friends[i][1]) || friends[i][1] === user) continue;

    friendsSet.add(friends[i][0]);
    recommendationScore.set(friends[i][1], recommendationScore.get(friends[i][1]) + 10 || 10);
  }

  for (let i = 0; i < visitors.length; i += 1) {
    if (friendsSet.has(visitors[i]) || visitors[i] === user) continue;

    recommendationScore.set(visitors[i], recommendationScore.get(visitors[i]) + 1 || 1);
  }

  const recommendationArray = Array.from(recommendationScore.keys()).sort(
    (a, b) => recommendationScore.get(b) - recommendationScore.get(a) || a.localeCompare(b)
  );

  return recommendationArray;
}

module.exports = problem7;

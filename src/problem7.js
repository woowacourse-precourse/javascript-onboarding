const getFriendsRelationMap = (friends) => {
  const relationMap = new Map();

  for (const [a, b] of friends) {
    const aFriends = relationMap.get(a);
    const bFriends = relationMap.get(b);
    if (aFriends) {
      relationMap.set(a, [...aFriends, b]);
    } else {
      relationMap.set(a, [b]);
    }

    if (bFriends) {
      relationMap.set(b, [...bFriends, a]);
    } else {
      relationMap.set(b, [a]);
    }
  }

  return relationMap;
};

function problem7(user, friends, visitors) {
  const relation = getFriendsRelationMap(friends);
  const userFriends = relation.get(user) ?? [];

  const recommendCandidaters = [
    ...new Set(friends.flatMap((friend) => [...friend]).concat(visitors)),
  ].filter((friend) => !userFriends.includes(friend) && friend !== user);

  const recommandScore = new Map(
    [...recommendCandidaters].map((candidate) => [candidate, 0]),
  );

  for (const candidate of recommendCandidaters) {
    let score = recommandScore.get(candidate);
    userFriends.forEach((friend) => {
      const friendList = relation.get(friend);
      if (friendList.includes(candidate)) {
        score += 10;
      }
    });

    if (visitors.includes(candidate)) {
      const visitCount = [...visitors].filter(
        (visit) => visit === candidate,
      ).length;
      score += visitCount;
    }
    recommandScore.set(candidate, score);
  }

  const answer = [...recommandScore]
    .filter(([_, score]) => score > 0)
    .sort((a, b) => {
      const [aName, aScore] = a;
      const [bName, bScore] = b;
      if (bScore > aScore) return 1;
      else if (bScore === aScore) {
        return aName < bName ? -1 : aName > bName ? 1 : 0;
      } else if (bScore < aScore) return -1;
    });

  return answer.slice(0, 5).map(([name, _]) => name);
}

module.exports = problem7;

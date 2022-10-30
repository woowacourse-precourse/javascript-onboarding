const getFriendsRelationMap = (friends) => {
  const relationMap = new Map();

  // 교우관계 저장
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
  const relation = getFriendsRelationMap(friends); // 교우관계 저장
  const userFriends = relation.get(user) ?? []; // user 친구 저장

  const recommendCandidaters = [
    ...new Set(friends.flatMap((friend) => [...friend]).concat(visitors)),
  ].filter((friend) => !userFriends.includes(friend) && friend !== user); // 친구 후보가 될 수 있는 사람 추가.

  const recommandScore = new Map(
    [...recommendCandidaters].map((candidate) => [candidate, 0]),
  );

  for (const candidate of recommendCandidaters) {
    let score = recommandScore.get(candidate);
    userFriends.forEach((friend) => {
      const friendList = relation.get(friend); // 사용자 친구들 순회
      if (friendList.includes(candidate)) {
        // 그 친구들 중에서 후보중에 있으면
        score += 10;
      }
    });

    if (visitors.includes(candidate)) {
      const visitCount = [...visitors].filter(
        (visit) => visit === candidate,
      ).length;
      score += visitCount;
    }
    recommandScore.set(candidate, score); // 10점 추가
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

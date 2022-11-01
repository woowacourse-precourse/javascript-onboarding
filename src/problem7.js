function problem7(user, friends, visitors) {
  const friendMap = new Map();
  friends.forEach(([f1, f2]) => {
    friendMap.set(f1, friendMap.get(f1) ? [...friendMap.get(f1), f2] : [f2]);
    friendMap.set(f2, friendMap.get(f2) ? [...friendMap.get(f2), f1] : [f1]);
  });

  const friendList = friendMap.get(user);
  const score = {};
  if (friendList) {
    for (let [k, v] of friendMap) {
      if (k !== user && !friendList.includes(k)) {
        score[k] = v.length * 10;
      }
    }
  }
  visitors.forEach((visitor) => {
    if (!friendList || !friendList.includes(visitor)) {
      score[visitor] = (score[visitor] || 0) + 1;
    }
  });

  const sortedScore = Object.entries(score).sort(
    ([name1, score1], [name2, score2]) => {
      if (score2 - score1 === 0) {
        if (name2 > name1) return -1;
        else if (name1 > name2) return 1;
        else return 0;
      }
      return score2 - score1;
    }
  );

  return sortedScore.map((score) => score[0]).slice(0, 5);
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  const relation = {};
  const score = {};
  friends.forEach(([user1, user2]) => {
    relation[user1] = [...(relation[user1] || []), user2];
    relation[user2] = [...(relation[user2] || []), user1];
  });
  relation[user].forEach((friend) => {
    relation[friend].forEach((knowTogether) => {
      if (knowTogether === user) return;
      if (!score[knowTogether]) score[knowTogether] = 0;
      score[knowTogether] += 10;
    });
  });
  visitors.forEach((visitor) => {
    if (relation[user].includes(visitor)) return;
    if (!score[visitor]) score[visitor] = 0;
    score[visitor] += 1;
  });
  return Object.entries(score)
    .sort(([user1Name, user1Score], [user2Name, user2Score]) => {
      if (user2Score === user1Score) return user2Name > user1Name ? -1 : 1;
      return user2Score - user1Score;
    })
    .reduce((result, recommand) => [...result, recommand[0]], [])
    .slice(0, 5);
}

module.exports = problem7;

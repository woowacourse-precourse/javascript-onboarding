function problem7(user, friends, visitors) {
  const relation = {};
  const score = {};
  friends.forEach(([user1, user2]) => {
    if (!relation[user1]) relation[user1] = [];
    if (!relation[user2]) relation[user2] = [];
    relation[user1].push(user2);
    relation[user2].push(user1);
  });
  relation[user].forEach((friend) => {
    relation[friend].forEach((knowTogether) => {
      if (knowTogether === user) return;
      if (!score[knowTogether]) score[knowTogether] = 0;
      score[knowTogether] += 10;
    });
  });
  visitors.forEach((visit) => {
    if (relation[user].includes(visit)) return;
    if (!score[visit]) score[visit] = 0;
    score[visit] += 1;
  });
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  let answer = [];
  let relation = new Map();

  friends.forEach((friend) => {
    if (friend.indexOf(user) === -1) {
      friend.forEach((score) => relation.set(score, 10));
    } else friend.forEach((score) => relation.set(score, 0));
  });

  visitors.forEach((visitor) => {
    if (!relation.has(visitor)) relation.set(visitor, 1);
  });

  let scoreArr = [...relation].sort((a, b) => b - a);

  scoreArr.forEach((score) => {
    if (score[1] > 0) answer.push(score[0]);
    answer.slice(0, 5);
  });
  return answer;
}

module.exports = problem7;

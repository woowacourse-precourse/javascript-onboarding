function problem7(user, friends, visitors) {
  let answer = [];
  const friendObj = {};
  let scores = [];
  const visitorObj = {};

  friends.map((friend) => {
    const [A, B] = friend;
    if (!(A in friendObj)) friendObj[A] = {};
    friendObj[A][B] = true;
    if (!(B in friendObj)) friendObj[B] = {};
    friendObj[B][A] = true;
  });

  visitors.map((visitor) => {
    if (visitor in visitorObj) visitorObj[visitor]++;
    else visitorObj[visitor] = 1;
  });

  for (let id in friendObj) {
    if (user === id) continue;
    let score = 0;
    for (let friend in friendObj[user]) {
      if (friend in friendObj[id]) score += 10;
    }
    if (id in visitorObj) {
      score += visitorObj[id];
    }
    scores.push({ id, score });
  }
  for (let visitor in visitorObj) {
    if (!(visitorObj[visitor] in friendObj)) {
      scores.push({ id: visitor, score: visitorObj[visitor] });
    }
  }
  scores = scores.filter((score) => !(score.id in friendObj[user]));
  scores.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    else return a < b ? -1 : 1;
  });
  scores = scores.filter((item) => item.score > 0);

  for (let i = 0; i < Math.min(scores.length, 5); i++) {
    answer.push(scores[i].id);
  }

  return answer;
}
module.exports = problem7;

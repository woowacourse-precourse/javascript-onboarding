function problem7(user, friends, visitors) {
  var answer = [];
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
  scores.sort();
  scores.sort((a, b) => b.score - a.score);
  scores = scores.filter((item) => item.score > 0);

  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    count++;
    answer.push(scores[i].id);
    if (count === 5) break;
  }
  
  return answer;
}
module.exports = problem7;

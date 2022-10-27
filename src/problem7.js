function getRelation(friends) {
  const relation = {};

  for (const [A, B] of friends) {
    if (!relation[A]) relation[A] = [];
    if (!relation[B]) relation[B] = [];
    relation[A].push(B);
    relation[B].push(A);
  }

  return relation;
}

function getSkip(user, relation) {
  const skip = [user];
  const arr = relation[user];

  if (!arr) return skip;

  for (const already of arr) {
    skip.push(already);
  }

  return skip;
}

function getUserList(keys, visitors, skip) {
  const list = [...keys, ...visitors].filter((el) => !skip.includes(el));

  return [...new Set(list)];
}

function getScores(user, userList, relation, visitors) {
  const scores = [];
  let arr = relation[user];

  if (!arr) arr = [];

  for (const other of userList) {
    let score = 0;
    const visitScore = visitors.filter((visitor) => visitor === other).length;
    score += visitScore;
    let friendScore = 0;
    if (!relation[other]) relation[other] = [];
    for (const one of relation[other]) {
      if (arr.includes(one)) friendScore += 10;
    }
    score += friendScore;
    scores.push([other, score]);
  }

  return scores;
}

function getInfos(user, friends, visitors) {
  const relation = getRelation(friends);
  const skip = getSkip(user, relation);
  const userList = getUserList(Object.keys(relation), visitors, skip);
  const scores = getScores(user, userList, relation, visitors);
  console.log(scores);
}
getInfos(
  'mrko',
  [
    ['donut', 'andole'],
    ['donut', 'jun'],
    ['donut', 'mrko'],
    ['shakevan', 'andole'],
    ['shakevan', 'jun'],
    ['shakevan', 'mrko'],
  ],
  ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
);
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

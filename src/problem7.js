function getRelation(user, friends, visitors) {
  const relation = {};

  for (const [A, B] of friends) {
    if (!relation[A]) relation[A] = [];
    if (!relation[B]) relation[B] = [];
    relation[A].push(B);
    relation[B].push(A);
  }

  if (!relation[user]) relation[user] = [];
  visitors = [...new Set(visitors)];
  for (const visitor of visitors) {
    if (!relation[visitor]) relation[visitor] = [];
  }

  return relation;
}

function getSkip(user, relation) {
  const skip = [user];
  const arr = relation[user];

  for (const already of arr) {
    skip.push(already);
  }

  return skip;
}

function getUserList(keys, visitors, skip) {
  const list = [...keys, ...visitors];

  return [...new Set(list)].filter((el) => !skip.includes(el));
}

function getScore(other, visitors, user_friends, other_friends) {
  const visitScore = visitors.filter((visitor) => visitor === other).length;
  let friendScore = 0;

  for (const one of other_friends) {
    if (user_friends.includes(one)) friendScore += 10;
  }

  return visitScore + friendScore;
}

function getScores(user, userList, relation, visitors) {
  const scores = [];

  for (const other of userList) {
    let score = 0;
    score += getScore(other, visitors, relation[user], relation[other]);
    scores.push([other, score]);
  }

  return scores;
}

function getAnswer(user, friends, visitors) {
  const relation = getRelation(user, friends, visitors);
  const skip = getSkip(user, relation);
  const userList = getUserList(Object.keys(relation), visitors, skip);
  const scores = getScores(user, userList, relation, visitors);

  return scores;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

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
function getInfos(user, friends) {
  const relation = getRelation(friends);
  const skip = getSkip(user, relation);

  console.log(skip);
}
getInfos('mrko', [
  ['donut', 'andole'],
  ['donut', 'jun'],
  ['donut', 'mrko'],
  ['shakevan', 'andole'],
  ['shakevan', 'jun'],
  ['shakevan', 'mrko'],
]);
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

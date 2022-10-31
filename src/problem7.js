function makeRelationship(friends) {
  const relation = new Object();

  friends.forEach((friendSet) => {
    relation[friendSet[0]] = [];
    relation[friendSet[1]] = [];
  })
  friends.forEach((friendSet) => {
    relation[friendSet[0]].push(friendSet[1]);
    relation[friendSet[1]].push(friendSet[0]);
  })
  return relation;
}

function problem7(user, friends, visitors) {
  const result = [];

  const friendsRelaion = makeRelationship(friends);
  console.log(friendsRelaion)
}

console.log(problem7("mrko", [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]))

module.exports = problem7;

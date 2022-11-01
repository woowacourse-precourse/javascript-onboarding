function hasKey(obj, target) {
  return target in obj;
}

function getRelations(friends) {
  const relations = {};

  friends.forEach(([idA, idB]) => {
    if (!hasKey(relations, idA)) {
      relations[idA] = new Set();
    }
    if (!hasKey(relations, idB)) {
      relations[idB] = new Set();
    }
    relations[idA].add(idB);
    relations[idB].add(idA);
  });

  return relations;
}

function problem7(user, friends, visitors) {
  var answer;
  const relations = getRelations(friends);

  return answer;
}

module.exports = problem7;

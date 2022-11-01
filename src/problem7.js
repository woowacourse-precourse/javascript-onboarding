function flatMap(arr) {
  return arr.flatMap((elem) => elem[0]);
}

function sort(arr) {
  const result = [...arr];

  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  return result;
}

function filter(arr) {
  return arr.filter(([_, val]) => val !== 0);
}

function applyKnownScore(scores, userFriends, relations, user) {
  userFriends.forEach((uFr) => {
    const friendKnownList = relations[uFr];

    friendKnownList.forEach((fKnown) => {
      if (fKnown === user) return;
      if (isFriend(userFriends, fKnown)) return;
      scores[fKnown] += 10;
    });
  });

  return scores;
}

function applyVisitScore(scores, userFriends, visitors) {
  visitors.forEach((visitor) => {
    if (isFriend(userFriends, visitor)) return;
    scores[visitor] += 1;
  });

  return scores;
}

function getRecommandScores(allUser) {
  const result = {};

  allUser.forEach((usr) => {
    result[usr] = 0;
  });
  return result;
}

function isFriend(set, target) {
  return set.has(target);
}

function getAllUser(relations, visitors) {
  const users = new Set([...Object.keys(relations), ...visitors]);

  return [...users];
}

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
  const userFriends = relations[user];
  const allUser = getAllUser(relations, visitors);
  const recommandScores = getRecommandScores(allUser);
  applyVisitScore(recommandScores, userFriends, visitors);
  applyKnownScore(recommandScores, userFriends, relations, user);
  answer = filter(Object.entries(recommandScores));
  answer = sort(answer).slice(0, 5);
  answer = flatMap(answer);

  return answer;
}

module.exports = problem7;

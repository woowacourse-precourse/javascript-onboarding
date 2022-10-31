function problem7(user, friends, visitors) {
  var answer;

  function createRelation(friends) {
    var relationMap = new Map();
    friends.forEach((pair) => {
      for (i = 0; i <= 1; i++) {
        if (!relationMap.has(pair[i])) relationMap.set(pair[i], [pair[1 - i]]);
        else if (!relationMap.get(pair[i]).includes(pair[1 - i]))
          relationMap.set(pair[i], [...relationMap.get(pair[i]), pair[1 - i]]);
      }
    });
    return relationMap;
  }

  function createScore(relationMap, visitors, user) {
    var scoreMap = new Map();
    relationMap.forEach((friends, name) => {
      name !== user &&
        friends.forEach((friend) => {
          if (
            friend !== user &&
            !relationMap.get(user).includes(friend) &&
            !scoreMap.has(friend)
          )
            scoreMap.set(friend, 0);
        });
    });
    visitors.forEach((visitor) => {
      if (!relationMap.get(user).includes(visitor) && !scoreMap.has(visitor))
        scoreMap.set(visitor, 0);
    });
    return scoreMap;
  }

  function relationScore(scoreMap, relationMap, user) {
    relationMap.get(user).forEach((userFriend) => {
      relationMap.get(userFriend).forEach((newFriend) => {
        scoreMap.has(newFriend) &&
          scoreMap.set(newFriend, scoreMap.get(newFriend) + 10);
      });
    });
    return scoreMap;
  }

  function visitScore(scoreMap, visitors) {
    visitors.forEach((visitor) => {
      scoreMap.has(visitor) && scoreMap.set(visitor, scoreMap.get(visitor) + 1);
    });
    return scoreMap;
  }

  function sorting(scoreMap) {
    var resultArray;
    resultArray = Array.from(scoreMap)
      .sort((a, b) => {
        if (a[1] == b[1]) a[0] - b[0];
        else b[1] - a[1];
      })
      .slice(0, 5)
      .filter((score) => score[1] !== 0)
      .map((score) => score[0]);
    return resultArray;
  }

  var relation = createRelation(friends);
  var scoreMap = createScore(relation, visitors, user);
  scoreMap = relationScore(scoreMap, relation, user);
  scoreMap = visitScore(scoreMap, visitors);
  answer = sorting(scoreMap);
  return answer;
}

module.exports = problem7;

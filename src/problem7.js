function problem7(user, friends, visitors) {
  var answer;

  function createRelation(friends) {
    var relationMap = new Map();
    return relationMap;
  }

  function createScore(relationMap, visitors, user) {
    var scoreMap = new Map();
    return scoreMap;
  }

  function relationScore(scoreMap, relationMap, user) {
    return scoreMap;
  }

  function visitScore(scoreMap, visitors) {
    return scoreMap;
  }

  function sorting(scoreMap) {
    var resultArray;

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

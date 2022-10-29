function getSortedScoreArr(score) {
  const scoreArr = Object.entries(score);
  scoreArr.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;

    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });

  return scoreArr;
}

const getTargetScore = (user, relations, totalScore) => {
  let targetScore = totalScore;
  if (user in totalScore) {
    delete targetScore[user];
    targetScore = relations[user].reduce((acc, friend) => {
      if (friend in acc) {
        delete acc[friend];
      }

      return acc;
    }, targetScore);
  }

  return targetScore;
};

const getTotalScore = (scoreObj, visitors) => {
  const totalScore = visitors.reduce((acc, visitor) => {
    if (visitor in acc) {
      acc[visitor] += 1;
    } else {
      acc[visitor] = 1;
    }

    return acc;
  }, scoreObj);

  return totalScore;
};

const getRelationScore = (user, relations) => {
  let relationScore = {};
  if (user in relations) {
    relationScore = relations[user].reduce((acc, directFriend) => {
      for (let friend of relations[directFriend]) {
        if (friend in acc) {
          acc[friend] += 10;
        } else {
          acc[friend] = 10;
        }
      }

      return acc;
    }, {});
  }

  return relationScore;
};

const makeRelations = (friends) => {
  const relations = friends.reduce((acc, relation) => {
    if (relation[0] in acc) {
      acc[relation[0]].push(relation[1]);
    } else {
      acc[relation[0]] = [relation[1]];
    }
    if (relation[1] in acc) {
      acc[relation[1]].push(relation[0]);
    } else {
      acc[relation[1]] = [relation[0]];
    }

    return acc;
  }, {});

  return relations;
};

function problem7(user, friends, visitors) {
  const answer = [];
  const relations = makeRelations(friends);
  const relationScore = getRelationScore(user, relations);
  const totalScore = getTotalScore(relationScore, visitors);
  const targetUserScore = getTargetScore(user, relations, totalScore);
  const sortedScore = getSortedScoreArr(targetUserScore);
  sortedScore.some((each, i) => {
    if (i > 4) return true;
    answer.push(each[0]);
  });

  return answer;
}

module.exports = problem7;

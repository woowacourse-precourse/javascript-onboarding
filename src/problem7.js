function getSortedScoreArr(score) {
  const scoreArr = Object.entries(score);
  scoreArr.sort((l, r) => {
    if (l[1] < r[1]) {
      return 1;
    }
    if (l[1] > r[1]) {
      return -1;
    }

    if (l[0] < r[0]) {
      return -1;
    }
    if (l[0] > r[0]) {
      return 1;
    }
    return 0;
  });

  return scoreArr;
}

const getTargetScoreObj = (user, relations, totalScore) => {
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

const getTotalScoreObj = (scoreObj, visitors) => {
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

const getRelationScoreObj = (user, relations) => {
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

const getRelationsObj = (friends) => {
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
  const relations = getRelationsObj(friends);
  const relationScore = getRelationScoreObj(user, relations);
  const totalScore = getTotalScoreObj(relationScore, visitors);
  const targetUserScore = getTargetScoreObj(user, relations, totalScore);
  const sortedScore = getSortedScoreArr(targetUserScore);
  sortedScore.some((each, i) => {
    if (i > 4) {
      return true;
    }
    answer.push(each[0]);
  });

  return answer;
}

module.exports = problem7;

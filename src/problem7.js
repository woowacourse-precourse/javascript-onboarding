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

function calculateScore(user, visitors, relations) {
  const score = {};
  if (user in relations) {
    relations[user].forEach((friend) => {
      if (friend in relations) {
        relations[friend].forEach((f) => {
          if (f in score) {
            score[f] += 10;
          } else {
            score[f] = 10;
          }
        });
      }
    });
  }
  visitors.some((visitor) => {
    if (user in relations && relations[user].includes(visitor)) return 0;
    if (visitor in score) {
      score[visitor] += 1;
    } else {
      score[visitor] = 1;
    }
  });

  return score;
}

function makeRelations(me, friends) {
  const relations = friends.reduce((acc, relation, i) => {
    if (relation[1] !== me) {
      if (relation[0] in acc) {
        acc[relation[0]].push(relation[1]);
      } else {
        acc[relation[0]] = [relation[1]];
      }
    }
    if (relation[0] !== me) {
      if (relation[1] in acc) {
        acc[relation[1]].push(relation[0]);
      } else {
        acc[relation[1]] = [relation[0]];
      }
    }

    return acc;
  }, {});

  return relations;
}

function problem7(user, friends, visitors) {
  const answer = [];
  const relations = makeRelations(user, friends);
  const score = calculateScore(user, visitors, relations);
  const sortedScore = getSortedScoreArr(score);
  sortedScore.some((each, i) => {
    if (i > 4) return true;
    answer.push(each[0]);
  });
  return answer;
}

module.exports = problem7;

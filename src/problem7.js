function problem7(user, friends, visitors) {
  const relation = getRelation(friends);
  const score = getScore(relation, user, visitors);

  let recommend = [];
  for (const friend in score) {
    if (
      !relation[user].includes(friend) 
      && !(friend === user) 
      && !(score[friend] === 0)
    ) {
      recommend.push([score[friend], friend]);
    }
  };

  const sortedRecommend = recommend.sort((a, b) => {
    if (a[0] < b[0]) return 1;
    if (a[0] > b[0]) return -1;
    if (a[0] === b[0]) {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      return 0;
    }
  });

  const answer = sortedRecommend.map(([, friend]) => friend).slice(0, 5);
  return answer;
}

function getRelation(friends) {
  let relation = {};
  friends.forEach(([a, b]) => {
    if (!relation[a]) relation[a] = [];
    if (!relation[b]) relation[b] = [];

    relation[a].push(b);
    relation[b].push(a);
  });

  return relation;
}

function getScore(relation, user, visitors) {
  const ids = Object.keys(relation);
  let score = {};
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    score[id] = 0;
  }

  const userFs = relation[user];
  for (let i = 0; i < userFs.length; i++) {
    const userFFs = relation[userFs[i]];
    for (let j = 0; j < userFFs.length; j++) {
      const userFF = userFFs[j];
      if (userFF === user) continue;
      
      score[userFF] += 10;
    }
  }
  
  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    if (!score[visitor]) score[visitor] = 0;

    score[visitor] += 1;
  }

  return score;
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  const relation = getRelation(friends);
  const score = getScore(relation, user, visitors);

  let recommend = [];
  for (const id in score) {
    if (relation[user].includes(id) || id === user || score[id] === 0) {
      continue;
    }
    recommend.push([score[id], id]);
  }
  const answer = recommend.sort().map(([, id]) => id);

  return answer.slice(0, 5);
}

function getRelation(friends) {
  let relation = {};
  for (let i = 0; i < friends.length; i++) {
    const [a, b] = friends[i];
    if (!relation[a]) {
      relation[a] = [];
    }
    if (!relation[b]) {
      relation[b] = [];
    }
    relation[a].push(b);
    relation[b].push(a);
  }
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
      if (userFF === user) {
        continue;
      }
      score[userFF] += 10;
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    score[visitors[i]] += 1;
  }

  return score;
}

module.exports = problem7;

function problem7(user, friends, visitor) {
  const relation = friendRelation(friends);
  let visitors = visitor.sort();
  const score = getScore(relation, user, visitors);
  let recommend = [];
  let result = [];
  for (const id in score) {
    if (relation[user].includes(id) || id === user || score[id] === 0) {
      continue;
    }

    recommend.push([score[id], id]);
  }

  let recommendList = recommend.sort((a, b) => b[0] - a[0]).map(([, id]) => id);

  if (recommendList.length > 5) {
    for (let i = 0; i < 5; i++) {
      result.push(recommendList[i]);
    }
  } else {
    result = recommendList;
  }

  return result;
}

function friendRelation(friends) {
  let relation = {};
  for (let i = 0; i < friends.length; i++) {
    const [user1, user2] = friends[i];
    if (!relation[user1]) {
      relation[user1] = [];
    }

    if (!relation[user2]) {
      relation[user2] = [];
    }

    relation[user1].push(user2);
    relation[user2].push(user1);
  }
  return relation;
}

function getScore(relation, user, visitors) {
  const names = Object.keys(relation);
  let score = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    score[name] = 0;
  }

  const userFriend = relation[user];
  for (let i = 0; i < userFriend.length; i++) {
    const frinedFriend = relation[userFriend[i]];
    for (let j = 0; j < frinedFriend.length; j++) {
      const userFF = frinedFriend[j];
      if (userFF === user) {
        continue;
      }

      score[userFF] += 10;
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (!score[visitors[i]]) {
      score[visitors[i]] = 1;
    } else {
      score[visitors[i]] += 1;
    }
  }

  return score;
}

module.exports = problem7;

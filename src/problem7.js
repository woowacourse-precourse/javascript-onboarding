function problem7(user, friends, visitors) {
  const relations = getRealtions(friends);
  const allUsers = new Set([...Object.keys(relations), ...visitors]);
  const userFriendList = relations[user];

  const recommandScore = initRecommandScore(allUsers);
  setFriendScore(recommandScore, relations, userFriendList, user);
  setVisitedScore(recommandScore, visitors, userFriendList);

  var answer = Object.entries(recommandScore)
    .filter(([_, value]) => value !== 0)
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return b[1] - a[1];
    })
    .slice(0, 5)
    .reduce((acc, val) => acc.concat(val[0]), []);
  return answer;
}

const getRealtions = (friends) => {
  const relations = {};

  for (let [a, b] of friends) {
    if (!isDuplicated(a, relations)) relations[a] = new Set();
    if (!isDuplicated(b, relations)) relations[b] = new Set();
    relations[a].add(b);
    relations[b].add(a);
  }
  return relations;
};

const isDuplicated = (data, relations) => {
  return data in relations;
};

const initRecommandScore = (allUsers) => {
  recommandScore = {};
  allUsers.forEach((user) => {
    recommandScore[user] = 0;
  });

  return recommandScore;
};

const setFriendScore = (recommandScore, relations, userFriendList, user) => {
  userFriendList.forEach((friend) => {
    relations[friend].forEach((relation) => {
      if ((relation === user) | userFriendList.has(relation)) return;
      recommandScore[relation] += 10;
    });
  });
};

const setVisitedScore = (recommandScore, visitors, userFriendList) => {
  visitors.forEach((visitor) => {
    if (userFriendList.has(visitor)) return;
    recommandScore[visitor] += 1;
  });
};

module.exports = problem7;

function problem7(user, friends, visitors) {
  const relations = getRealtions(friends);
  const allUsers = new Set([...Object.keys(relations), ...visitors]);
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

module.exports = problem7;

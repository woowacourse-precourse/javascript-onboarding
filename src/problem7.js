const setUserMap = (userMap, [userA, userB]) => {
  userMap.set(userA, [...(userMap.get(userA) || []), userB]);
  userMap.set(userB, [...(userMap.get(userB) || []), userA]);
};

const getKnowEachOtherScore = (userAFriends, userBFriends) => {
  let count = 0;
  userAFriends.forEach((user) => {
    if (userBFriends.includes(user)) count++;
  });

  return count * 10;
};

const setUserScoreMap = (map, user, score) => {
  map.set(user, (map.get(user) | 0) + score);
};

function problem7(user, friends, visitors) {
  const userMap = new Map();
  friends.forEach((item) => setUserMap(userMap, item));

  const userScoreMap = new Map();
  userMap.forEach((value, key) => {
    if (key === user) return;
    setUserScoreMap(
      userScoreMap,
      key,
      getKnowEachOtherScore(userMap.get(user), value)
    );
  });

  visitors.forEach((item) => {
    setUserScoreMap(userScoreMap, item, 1);
  });

  const recommendedFrieds = [];
  userScoreMap.forEach((value, key) => {
    if (userMap.get(user).includes(key)) return;
    recommendedFrieds.push([key, value]);
  });

  recommendedFrieds.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else if (a[0] > b[0]) return 1;
    else return -1;
  });

  console.log(recommendedFrieds);
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  var answer = result(user, friends, visitors);
  return answer;
}

function result(user, friends, visitors) {
  const userMap = new Map();
  friends.forEach((item) => setUserMap(userMap, item));

  const scoreMap = new Map();
  userMap.forEach((value, key) => {
    if (key === user) return;
    setScoreMap(scoreMap, key, getEachScore(userMap.get(user), value));
  });

  visitors.forEach((item) => {
    setScoreMap(scoreMap, item, ADD_VISITED_SCORE);
  });

  let recommendedFriend = [];
  scoreMap.forEach((value, key) => {
    if (userMap.get(user)?.includes(key) || value === 0) return;
    recommendedFriend.push([key, value]);
  });

  recommendedFriend.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else if (a[0] > b[0]) return 1;
    else return -1;
  });

  return recommendedFriend
    .flatMap(([user]) => user)
    .slice(0, MAX_RECOMMENDED_FRIENDS);
}

const ADD_FRIEND_SCORE = 10;
const ADD_VISITED_SCORE = 1;
const MAX_RECOMMENDED_FRIENDS = 5;

const setUserMap = (userMap, [userA, userB]) => {
  userMap.set(userA, [...(userMap.get(userA) || []), userB]);
  userMap.set(userB, [...(userMap.get(userB) || []), userA]);
};

const getEachScore = (userAFriend, userBFriend) => {
  if (!userAFriend) return 0;

  let count = 0;
  userAFriend.forEach((user) => {
    if (userBFriend.includes(user)) count++;
  });

  return count * ADD_FRIEND_SCORE;
};

const setScoreMap = (map, user, score) => {
  map.set(user, (map.get(user) | 0) + score);
};

module.exports = problem7;

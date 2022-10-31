function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

const ADD_FRIEND_SCORE = 10;
const ADD_VISITED_SCORE = 1;

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

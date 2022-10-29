function createUserFriendObject(user, friends) {
  const TOTAL_INDEX = 1;
  const initialFriendObject = {};
  friends.forEach(friend => {
    const userIndex = friend.indexOf(user);

    if (userIndex !== -1) {
      const friendIndex = TOTAL_INDEX - userIndex;
      const friendName = friend[friendIndex];
      initialFriendObject[friendName] = [];
    }
  });

  return initialFriendObject;
}

function findFriendFollower(user, userFriendObject, friends) {
  const userFriends = Object.keys(userFriendObject);
  friends = friends.filter(friend => !friend.includes(user));
  friends.forEach(friend => {
    if (friend.some(person => userFriends.includes(person))) {
      try {
        userFriendObject[friend[0]].push(friend[1]);
      } catch {
        userFriendObject[friend[1]].push(friend[0]);
      }
    }
  });
}

function countFollowerScore(userFriendObject, scoreCount) {
  let followerList = [];
  Object.values(userFriendObject).forEach(followers => {
    followerList = followerList.concat(followers);
  });

  followerList.forEach(follower => {
    const INCREMENT_NUMBER = 10;
    if (!userFriendObject[follower]) {
      if (scoreCount[follower]) {
        scoreCount[follower] += INCREMENT_NUMBER;
      } else {
        scoreCount[follower] = INCREMENT_NUMBER;
      }
    }
  });
}

function countVisitScore(visitors, userFriendObject, scoreCount) {
  const INCREMENT_NUMBER = 1;
  visitors.forEach(visitor => {
    if (!userFriendObject[visitor]) {
      if (scoreCount[visitor]) {
        scoreCount[visitor] += INCREMENT_NUMBER;
      } else {
        scoreCount[visitor] = INCREMENT_NUMBER;
      }
    }
  });
}

function getRecommendationList(scoreCount) {
  const LIMIT_RECOMMENDATION_NUMBER = 5;
  let recommendationList = [];
  for (let name in scoreCount) {
    recommendationList.push([name, scoreCount[name]]);
  }

  recommendationList.sort(function (a, b) {
    let scoreA = a[1];
    let scoreB = b[1];
    let nameA = a[0];
    let nameB = b[0];
    if (scoreA < scoreB) return 1;
    if (scoreA > scoreB) return -1;
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });

  recommendationList = recommendationList.slice(0, LIMIT_RECOMMENDATION_NUMBER);

  for (i = 0; i < recommendationList.length; i++) {
    recommendationList[i] = recommendationList[i][0];
  }

  return recommendationList;
}

function problem7(user, friends, visitors) {
  var answer;
  let scoreCount = {};
  const userFriendObject = createUserFriendObject(user, friends);
  findFriendFollower(user, userFriendObject, friends);
  countFollowerScore(userFriendObject, scoreCount);
  countVisitScore(visitors, userFriendObject, scoreCount);
  answer = getRecommendationList(scoreCount);
  return answer;
}

module.exports = problem7;

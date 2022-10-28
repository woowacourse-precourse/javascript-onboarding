function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getUserFrieds(user, friends) {
  const userFriends = new Set();
  friends.forEach((friend) => {
    const [friend1, friend2] = friend;
    if (friend1 === user) {
      userFriends.add(friend2);
    } else if (friend2 === user) {
      userFriends.add(friend1);
    }
  });
  return userFriends;
}

function setWithKnowScore(withKnowScore, friend) {
  if (withKnowScore[friend]) {
    withKnowScore[friend] += 10;
  } else {
    withKnowScore[friend] = 10;
  }
  return withKnowScore;
}

function getWithKnowScore(userFriends, friends) {
  let withKnowScore = {};
  friends.forEach((friend) => {
    const [friend1, friend2] = friend;
    if (userFriends.has(friend1)) {
      withKnowScore = setWithKnowScore(withKnowScore, friend2);
    } else if (userFriends.has(friend2)) {
      withKnowScore = setWithKnowScore(withKnowScore, friend1);
    }
  });
  return withKnowScore;
}

module.exports = problem7;

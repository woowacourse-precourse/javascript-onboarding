function getScoreVisitor(visitors) {
  let score = {};

  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] in score === false) {
      score[visitors[i]] = 1;
    } else {
      score[visitors[i]] += 1;
    }
  }

  return score;
}

function getUserFriendList(user, friends) {
  const friendList = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user || friends[i][1] === user) {
      friendList.push(friends[i][0] === user ? friends[i][1] : friends[i][0]);
    }
  }

  return friendList;
}

function getScoreFriends(friends, userFriends, score) {
  if (userFriends.includes(friends[0]) || userFriends.includes(friends[1])) {
    i = userFriends.includes(friends[0]) ? 1 : 0;
  } else {
    return score;
  }

  if (friends[i] in score === false) {
    score[friends[i]] = 10;
  } else if (friends[i] in score) {
    score[friends[i]] += 10;
  }

  return score;
}

function sortFriendName(friends) {
  const sortFriends = [];

  for (let name in friends) {
    sortFriends.push([name, friends[name]]);
  }

  return sortFriends.sort();
}

function sortFriendScore(friends) {
  friends.sort(function (a, b) {
    return b[1] - a[1];
  });

  return friends;
}

function getRecommendList(sortFriends, userFriends, user) {
  const recommendList = [];

  sortFriends.forEach((v) => {
    if (v[0] !== user && !userFriends.includes(v[0])) {
      recommendList.push(v[0]);
    }

    if (recommendList.length === 5) {
      return recommendList;
    }
  });

  return recommendList;
}

function problem7(user, friends, visitors) {
  let friendScore = {};
  let userFriends = [];
  let sortFriends;

  friendScore = getScoreVisitor(visitors);
  userFriends = getUserFriendList(user, friends);

  for (let i = 0; i < friends.length; i++) {
    friendScore = getScoreFriends(friends[i], userFriends, friendScore);
  }

  sortFriends = sortFriendName(friendScore);
  sortFriends = sortFriendScore(sortFriends);
  answer = getRecommendList(sortFriends, userFriends, user);

  return answer;
}

module.exports = problem7;

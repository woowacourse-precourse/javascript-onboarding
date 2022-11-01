function problem7(user, friends, visitors) {
  let score = {};

  const friendsRelation = getFriendsRelation(friends);
  score = mutualFriendScore(user, friendsRelation, score);
  score = visitScore(score, visitors);

  const sortedScore = sortScore(score);

  return filterTopFive(user, sortedScore, friendsRelation);
}

const getFriendsRelation = (friends) => {
  let friendsRelation = {};

  friends.forEach((relation) => {
    const friendA = relation[0];
    const friendB = relation[1];

    if (existKey(friendsRelation, friendA)) {
      friendsRelation[friendA].push(friendB);
    } else {
      friendsRelation[friendA] = [friendB];
    }

    if (existKey(friendsRelation, friendB)) {
      friendsRelation[friendB].push(friendA);
    } else {
      friendsRelation[friendB] = [friendA];
    }
  });

  return friendsRelation;
};

const visitScore = (score, visitors) => {
  visitors.forEach((visitor) => {
    if (existKey(score, visitor)) {
      score[visitor] += 1;
    } else {
      score[visitor] = 1;
    }
  });

  return score;
};

const mutualFriendScore = (user, friendsRelation, score) => {
  const userFriends = friendsRelation[user];

  userFriends.forEach((friend) => {
    const mutualFriends = friendsRelation[friend];

    mutualFriends.forEach((mutualFriend) => {
      if (existKey(score, mutualFriend)) {
        score[mutualFriend] += 10;
      } else {
        score[mutualFriend] = 10;
      }
    });
  });

  return score;
};

const sortScore = (score) => {
  const sortedScore = Object.entries(score).sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      return -1;
    }
    return 1;
  });

  return sortedScore;
};

const filterTopFive = (user, sortedScore, friendsRelation) => {
  let recommendationFriends = [];
  const NOT_RECOMEND_FRIENDS = [user, ...friendsRelation[user]];

  let recommendationFriendNumber = 0;
  for (let i = 0; i < sortedScore.length; i++) {
    const friendName = sortedScore[i][0];
    if (NOT_RECOMEND_FRIENDS.indexOf(friendName) === -1) {
      recommendationFriends.push(friendName);
      recommendationFriendNumber += 1;
    }

    if (recommendationFriendNumber === 5) return recommendationFriends;
  }

  return recommendationFriends;
};

const existKey = (obj, key) => {
  if (Object.keys(obj).includes(key)) return true;
  return false;
};

module.exports = problem7;

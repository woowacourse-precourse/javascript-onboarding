function problem7(user, friends, visitors) {
  var answer;

  return answer;
}

const getFriendsRelation = (friends) => {
  let friendsRelation = {};

  friends.forEach((relation) => {
    const friendA = relation[0];
    const friendB = relation[1];

    if (!friendsRelation[friendA]) {
      friendsRelation[friendA] = [friendB];
    } else {
      friendsRelation[friendA].push(friendB);
    }

    if (!friendsRelation[friendB]) {
      friendsRelation[friendB] = [friendA];
    } else {
      friendsRelation[friendB].push(friendA);
    }
  });

  return friendsRelation;
};

const visitScore = (score, visitors) => {
  visitors.forEach((visitor) => {
    if (!score[visitor]) {
      score[visitor] = 1;
    } else {
      score[visitor] += 1;
    }
  });

  return score;
};

const mutualFriendScore = (user, friendsRelation, score) => {
  const userFriends = friendsRelation[user];

  userFriends.forEach((friend) => {
    const mutualFriends = friendsRelation[friend];

    mutualFriends.forEach((mutualFriend) => {
      if (!score[mutualFriend]) {
        score[mutualFriend] = 10;
      } else {
        score[mutualFriend] += 10;
      }
    });
  });

  return score;
};

module.exports = problem7;

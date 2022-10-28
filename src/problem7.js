const getUserFriends = (user, friends) => {
  const userFriends = [];
  
  friends.forEach((friend) => {
    if (friend.includes(user) && friend[0] === user) {
      userFriends.push(friend[1]);
    }
    if (friend.includes(user) && friend[1] === user) {
      userFriends.push(friend[0]);
    }
  });

  return userFriends;
};

const getScores = (user, friends, visitors) => {
  const scores = {};
  const userFriends = getUserFriends(user,friends);

  userFriends.forEach((friend) => {
    const mutualFriends = getUserFriends(friend, friends);
    mutualFriends.forEach((mutualFriend) => {
      if (mutualFriend === user) {
        return;
      }
      if (scores[mutualFriend] === undefined) {
        scores[mutualFriend] = 10;
      }
      if (scores[mutualFriend] !== undefined) {
        scores[mutualFriend] += 10;
      }
    });
  });

  visitors.forEach((visitor) => {
    if (userFriends.includes(visitor)) {
      return;
    }
    if (scores[visitor] === undefined) {
      scores[visitor] = 1;
      return;
    }
    scores[visitor] += 1;
  });

  return scores;
};

function problem7(user, friends, visitors) {
  const scores = getScores(user, friends, visitors);
  
}

module.exports = problem7;

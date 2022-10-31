function problem7(user, friends, visitors) {
  const scores = getScores(user, friends, visitors);
  const usersAndScores = Object.entries(scores);
  const recommendedUsers = sortScoreOrder(usersAndScores);
  return recommendedUsers.slice(0, 5);
}

function getUserFriends(user, friends) {
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
}

function getScores(user, friends, visitors) {
  const scores = {};
  const userFriends = getUserFriends(user, friends);

  userFriends.forEach((friend) => {
    const mutualFriends = getUserFriends(friend, friends);
    mutualFriends.forEach((mutualFriend) => {
      if (mutualFriend === user || userFriends.includes(mutualFriend)) return;
      if (scores[mutualFriend] === undefined) {
        scores[mutualFriend] = 10;
        return;
      }
      if (scores[mutualFriend] !== undefined) {
        scores[mutualFriend] += 10;
        return;
      }
    });
  });

  visitors.forEach((visitor) => {
    if (userFriends.includes(visitor)) return;
    if (scores[visitor] === undefined) {
      scores[visitor] = 1;
      return;
    }
    if (scores[visitor] !== undefined) {
      scores[visitor] += 1;
      return;
    }
  });

  return scores;
}

function sortScoreOrder(usersAndScores) {
  usersAndScores.sort((a, b) => b[1] - a[1]);
  const highestScore = usersAndScores[0][1];
  const highestUsers = usersAndScores.filter(([user, score]) => score === highestScore).map(([user, score]) => user).sort();
  const elseUsers = usersAndScores.filter(([user, score]) => score !== highestScore).map(([user, score]) => user).sort();
  return [...highestUsers, ...elseUsers];
}

module.exports = problem7;

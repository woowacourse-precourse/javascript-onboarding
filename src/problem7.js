function problem7(user, friends, visitors) {
  const { userFriends, userFriendsScore } = getUserFriendScroe(user, friends, visitors);
  const usersResultScore = sortUsers(getUserVisitorScore(userFriends, userFriendsScore, visitors));
  return getAnswer(usersResultScore);
}

const getUserFriendScroe = (user, friends) => {
  const userFriends = getUserFriends(user, friends);
  const userFriendsScore = new Map();
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      return;
    }
    [friend, [...friend].reverse()].forEach((v) => {
      const [friendA, friendB] = v;
      if (userFriends.has(friendA) && !userFriends.has(friendB)) {
        if (userFriendsScore.has(friendB)) {
          userFriendsScore.set(friendB, userFriendsScore.get(friendB) + 10);
        } else if (!userFriendsScore.has(friendB)) {
          userFriendsScore.set(friendB, 10);
        }
      }
    });
  });
  return { userFriends, userFriendsScore };
};

const getUserVisitorScore = (userFriends, userFriendsScore, visitors) => {
  visitors.forEach((visitor) => {
    if (!userFriends.has(visitor)) {
      if (userFriendsScore.has(visitor)) {
        userFriendsScore.set(visitor, userFriendsScore.get(visitor) + 1);
      } else if (!userFriendsScore.has(visitor)) {
        userFriendsScore.set(visitor, 1);
      }
    }
  });
  return userFriendsScore;
};

const getUserFriends = (user, friends) => {
  const userFriends = new Map();
  for (let i = 0; i < friends.length; i += 1) {
    const [friendA, friendB] = friends[i];
    if (friendA === user) {
      userFriends.set(friendB, 0);
    } else if (friendB === user) {
      userFriends.set(friendA, 0);
    }
  }
  return userFriends;
};

const sortUsers = (users) => {
  return [...users].sort(([nameA, scoreA], [nameB, scoreB]) => {
    if (scoreA === scoreB) {
      return nameA > nameB ? 1 : -1;
    }
    return scoreA > scoreB ? -1 : 1;
  });
};

const getAnswer = (usersResultScore) => {
  const answer = [];
  usersResultScore.forEach((user) => {
    if (user[1] !== 0) {
      answer.push(user[0]);
    }
  });
  return answer.slice(0, 5);
};

module.exports = problem7;

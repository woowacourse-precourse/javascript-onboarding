function listAllUsersExcept(friends, user) {
  const userSet = new Set();
  for (let i = 0; i < friends.length; i++) {
    const friendPair = friends[i];
    if (friendPair[0] !== user) {
      userSet.add(friendPair[0]);
    }
    if (friendPair[1] !== user) {
      userSet.add(friendPair[1]);
    }
  }
  return Array.from(userSet);
}

function findFriends(user, friends) {
  const userFriendsSet = new Set();
  for (let i = 0; i < friends.length; i++) {
    const friendPair = friends[i];
    if (friendPair[0] === user) {
      userFriendsSet.add(friendPair[1]);
      continue;
    }
    if (friendPair[1] === user) {
      userFriendsSet.add(friendPair[0]);
    }
  }
  return Array.from(userFriendsSet);
}

function problem7(user, friends, visitors) {
  const allUsers = listAllUsersExcept([...friends, ...visitors], user);
  const userFriends = findFriends(user, friends);
  const scoreMap = {};
  for (let i = 0; i < allUsers.length; i++) {
    const currentUser = allUsers[i];
    if (userFriends.includes(currentUser)) {
      continue;
    }
    const currentUserFriends = findFriends(currentUser, friends);
    for (let j = 0; j < userFriends.length; j++) {
      const userFriend = userFriends[j];
      if (currentUserFriends.includes(userFriend)) {
        if (scoreMap[currentUser]) {
          scoreMap[currentUser] += 10;
        } else {
          scoreMap[currentUser] = 10;
        }
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    if (userFriends.includes(visitor)) {
      continue;
    }
    if (scoreMap[visitor]) {
      scoreMap[visitor] += 1;
    } else {
      scoreMap[visitor] = 1;
    }
  }

  const scoredUsers = Object.entries(scoreMap); // [['user1', 10], ['user2', 20], ... ]
  const sorted = scoredUsers
    .sort((o1, o2) => {
      const firstUser = o1[0];
      const firstScore = o1[1];
      const secondUser = o2[0];
      const secondScore = o2[0];
      if (firstScore === secondScore) {
        return firstUser > secondUser;
      }
      return firstScore < secondScore;
    })
    .map((o) => o[0])
    .slice(0, 5);
  var answer = sorted;
  return answer;
}

module.exports = problem7;

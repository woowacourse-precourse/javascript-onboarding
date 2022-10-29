function problem7(user, friends, visitors) {
  const scores = {};

  const userFriendNames = getFriends(user, friends);

  userFriendNames.forEach((friendName) => {
    const friendsOfFriend = getFriends(friendName, friends);

    friendsOfFriend.forEach((friend) => {
      if (friend !== user) {
        scores[friend] = scores[friend] ? scores[friend] + 10 : 10;
      }
    });
  });

  visitors.forEach((visitor) => {
    if (!isAlreadyFriend(visitor, userFriendNames)) {
      scores[visitor] = scores[visitor] ? (scores[visitor] += 1) : 1;
    }
  });

  const sortedScores = Object.entries(scores).sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      else if (b[0] > a[0]) return -1;
      else return 0;
    } else {
      return b[1] - a[1];
    }
  });

  const sortedName = sortedScores.map((score) => score[0]);

  return sortedName.length > 5 ? sortedName.slice(0, 5) : sortedName;
}

function getFriends(user, friends) {
  const userFriends = [];

  friends.forEach((friend) => {
    const foundIndex = friend.findIndex((f) => f === user);

    if (foundIndex !== -1) {
      const friendName = foundIndex === 0 ? friend[1] : friend[0];
      userFriends.push(friendName);
    }
  });

  return userFriends;
}

function isAlreadyFriend(user, friendList) {
  const index = friendList.findIndex((f) => user === f);

  return index !== -1;
}

module.exports = problem7;

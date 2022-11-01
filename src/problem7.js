function findUserFriends(user, friends) {
  const userFriends = [user];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      userFriends.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      userFriends.push(friends[i][0]);
    }
  }
  return userFriends;
}

function knowTogetherScore(friends, userFriends) {
  const reserveFriends = [];

  for (let i = 0; i < friends.length; i++) {
    if (
      userFriends.includes(friends[i][0]) &&
      !userFriends.includes(friends[i][1])
    ) {
      reserveFriends.find((friend) => friend.name === friends[i][1])
        ? reserveFriends.map((friend) => {
            if (friend.name === friends[i][1]) {
              friend.score += 10;
            }
          })
        : reserveFriends.push({ name: friends[i][1], score: 10 });
    } else if (
      userFriends.includes(friends[i][1]) &&
      !userFriends.includes(friends[i][0])
    ) {
      reserveFriends.find((friend) => friend.name === friends[i][0])
        ? reserveFriends.map((friend) => {
            if (friend.name === friends[i][0]) {
              friend.score += 10;
            }
          })
        : reserveFriends.push({ name: friends[i][0], score: 10 });
    }
  }
  return reserveFriends;
}

function visitScore(visitors, userFriends, reserveFriends) {
  for (let i = 0; i < visitors.length; i++) {
    if (!userFriends.includes(visitors[i])) {
      reserveFriends.find((friend) => friend.name === visitors[i])
        ? reserveFriends.map((friend) => {
            if (friend.name === visitors[i]) {
              friend.score += 1;
            }
          })
        : reserveFriends.push({ name: visitors[i], score: 1 });
    }
  }
  return reserveFriends;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

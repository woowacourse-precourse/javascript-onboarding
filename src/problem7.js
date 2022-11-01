function problem7(user, friends, visitors) {
  const friendsOb = allFriendRelationship(friends);
  const scoreOb = {};

  const userFriendsList = friendsOb[user];
  delete friendsOb[user];

  userFriendsList.map((user) => {
    delete friendsOb[user];
  });

  const finishFreindsArr = Object.entries(friendsOb);
  finishFreindsArr.map((friend) => {
    const [key, arr] = friend;
    const intersectionLength = arr.filter((x) =>
      userFriendsList.includes(x)
    ).length;
    if (intersectionLength > 0) {
      scoreOb[key] = intersectionLength * 10;
    }
  });

  visitors.map((user) => {
    if (!userFriendsList.includes(user)) {
      if (scoreOb[user]) {
        scoreOb[user]++;
      } else {
        scoreOb[user] = 1;
      }
    }
  });

  const answer = Object.keys(scoreOb);
  answer.sort((a, b) => {
    if (scoreOb[a] === scoreOb[b]) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    return scoreOb[b] - scoreOb[a];
  });

  return answer.splice(0, 5);
}

function allFriendRelationship(friends) {
  const friendsOb = {};
  friends.map((friendRelationship) => {
    const [A, B] = friendRelationship;
    if (friendsOb[A]) {
      friendsOb[A].push(B);
    } else {
      friendsOb[A] = [B];
    }
    if (friendsOb[B]) {
      friendsOb[B].push(A);
    } else {
      friendsOb[B] = [A];
    }
  });
  return friendsOb;
}

module.exports = problem7;

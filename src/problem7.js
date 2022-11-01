function problem7(user, friends, visitors) {
  const friendsOb = {};
  const scoreOb = {};

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

  const userFriendsArr = friendsOb[user];
  delete friendsOb[user];

  userFriendsArr.map((user) => {
    delete friendsOb[user];
  });

  const finishFreindsArr = Object.entries(friendsOb);
  finishFreindsArr.map((friend) => {
    const [key, arr] = friend;
    const intersectionLength = arr.filter((x) =>
      userFriendsArr.includes(x)
    ).length;
    if (intersectionLength > 0) {
      scoreOb[key] = intersectionLength * 10;
    }
  });

  return scoreOb;
}

module.exports = problem7;

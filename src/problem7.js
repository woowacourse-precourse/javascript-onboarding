function problem7(user, friends, visitors) {
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

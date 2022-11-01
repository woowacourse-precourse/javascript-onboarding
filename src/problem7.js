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
    const [user, friendsList] = friend;
    const numberFriendsWeKnowTogether = friendsList.filter((friend) =>
      userFriendsList.includes(friend)
    ).length;
    if (numberFriendsWeKnowTogether > 0) {
      scoreOb[user] = numberFriendsWeKnowTogether * 10;
    }
  });

  visitors.map((visitor) => {
    if (!userFriendsList.includes(visitor)) {
      scoreOb[visitor] ? scoreOb[visitor]++ : (scoreOb[visitor] = 1);
    }
  });

  const answer = Object.keys(scoreOb);
  answer.sort();
  answer.sort((a, b) => scoreOb[b] - scoreOb[a]);

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

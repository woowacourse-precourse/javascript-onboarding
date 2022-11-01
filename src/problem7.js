function getUserFriend(friends, user) {
  let userFriend = [];
  for (i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      friends[i].forEach((value) => {
        if (value !== user) userFriend.push(value);
      });
    }
  }
  return userFriend;
}

function getKnowWithFriendScore(friendsExceptUser, userFriend) {
  let friendScore = {};
  for (i = 0; i < friendsExceptUser.length; i++) {
    if (friendsExceptUser[i]?.filter((x) => userFriend.includes(x))) {
      const knowWith = friendsExceptUser[i]?.filter(
        (x) => !userFriend.includes(x)
      );
      if (knowWith in friendScore) {
        friendScore = {
          ...friendScore,
          [knowWith]: friendScore[knowWith] + 10,
        };
      } else {
        friendScore = { ...friendScore, [knowWith]: 10 };
      }
    }
  }
  return friendScore;
}

function problem7(user, friends, visitors) {
  var answer;
  const userFriend = getUserFriend(friends, user);
  let friendsExceptUser = friends.filter((v) => !v.includes(user));
  let visitorsExceptUserFriends = visitors.filter(
    (v) => !userFriend.includes(v)
  );
  let friendScore = {};

  friendScore = getKnowWithFriendScore(friendsExceptUser, userFriend);
  return answer;
}

module.exports = problem7;

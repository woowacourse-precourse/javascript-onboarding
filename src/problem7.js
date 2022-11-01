function problem7(user, friends, visitors) {
  const userFriendList = {};
  for (i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      const friend = friends[i].filter((el) => el !== user);
      userFriendList[friend] = [];
    }
  }

  const recommendedUser = {};
  const userFriendName = Object.keys(userFriendList);
  for (i = 0; i < userFriendName.length; i++) {
    const userFriend = userFriendName[i];
    for (j = 0; j < friends.length; j++) {
      if (friends[j].includes(userFriend) && !friends[j].includes(user)) {
        const friend = friends[j].filter((el) => el != userFriend);
        userFriendList[userFriend].push(...friend);
        recommendedUser[friend] !== undefined
          ? (recommendedUser[friend] += 10)
          : (recommendedUser[friend] = 0);
      }
    }
  }

  for (i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    if (!userFriendName.includes(visitor))
      recommendedUser[visitor] !== undefined
        ? (recommendedUser[visitor] += 1)
        : (recommendedUser[visitor] = 1);
  }

  const recommendedUserArray = Object.keys(recommendedUser);

  const sortScore = (a, b) => {
    const aScore = recommendedUser[a];
    const bScore = recommendedUser[b];
    aScore === bScore ? a.charCodeAt(0) - b.charCodeAt(0) : bScore - aScore;
  };
  return recommendedUserArray.sort(sortScore);
}

module.exports = problem7;

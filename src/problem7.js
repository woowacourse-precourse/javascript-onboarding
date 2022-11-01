function problem7(user, friends, visitors) {
  let answer;

  const scoreFromMutualFriends = (user, friendsArr) => {
    let friendsWithUser = friendsArr.filter((friends) => {
      return friends[0] == user || friends[1] == user;
    });
    friendsWithUser = friendsWithUser.reduce((acc, cur) => acc.concat(cur));
    friendsWithUser = friendsWithUser.filter((friends) => {
      return friends != user;
    });

    let friendsNotWithUser = friendsArr.filter((friends) => {
      return friends[0] != user && friends[1] != user;
    });

    let mutualObj = {};
    for (i = 0; i < friendsWithUser.length; i++) {
      for (j = 0; j < friendsNotWithUser.length; j++) {
        if (friendsWithUser[i] == friendsNotWithUser[j][0]) {
          if (Object.keys(mutualObj).includes(friendsNotWithUser[j][1])) {
            mutualObj[friendsNotWithUser[j][1]] += 10;
          } else {
            mutualObj[friendsNotWithUser[j][1]] = 10;
          }
        } else if (friendsWithUser[i] == friendsNotWithUser[j][1]) {
          if (Object.keys(mutualObj).includes(friendsNotWithUser[j][0])) {
            mutualObj[friendsNotWithUser[j][0]] += 10;
          } else {
            mutualObj[friendsNotWithUser[j][0]] = 10;
          }
        }
      }
    }
    return [friendsWithUser, mutualObj];
  };

  const scoreFromVisit = (visitors) => {
    let visitorsObj = {};
    for (i = 0; i < visitors.length; i++) {
      if (Object.keys(visitorsObj).includes(visitors[i])) {
        visitorsObj[visitors[i]] += 1;
      } else {
        visitorsObj[visitors[i]] = 1;
      }
    }
    return visitorsObj;
  };
}

module.exports = problem7;

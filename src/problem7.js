function problem7(user, friends, visitors) {
  const temp = friends.flat();
  const relatedUsersSet = new Set([].concat(temp, visitors));
  const relatedUsers = Array.from(relatedUsersSet);
  
  let graph = Array.from(new Array(relatedUsers.length), () =>
    new Array().fill([])
  );

  for (let i = 0; i < friends.length; i++) {
    graph[relatedUsers.indexOf(friends[i][0])].push(
      relatedUsers.indexOf(friends[i][1])
    );
    graph[relatedUsers.indexOf(friends[i][1])].push(
      relatedUsers.indexOf(friends[i][0])
    );
  }

  const alreadyFriendsNumber = graph[relatedUsers.indexOf(user)];
  let alreadyFriendsDict = {};
  
  for (let i = 0; i < alreadyFriendsNumber.length; i++) {
    alreadyFriendsDict[relatedUsers[alreadyFriendsNumber[i]]] =
      alreadyFriendsNumber[i];
  }

  let values = Object.values(alreadyFriendsDict);
  let weightValues = {};
  
  values.forEach((cur) => {
    const nxts = graph[cur];
    nxts.forEach((nxt) => {
      const key = relatedUsers[nxt];
      if (key in weightValues) {
        weightValues[key] += 10;
      } else {
        weightValues[key] = 10;
      }
    });
  });

  visitors.forEach((key) => {
    if (key in weightValues) {
      weightValues[key] += 1;
    } else {
      weightValues[key] = 1;
    }
  });

  const alreadyFriends = Object.keys(alreadyFriendsDict);
  const notRecommendList = alreadyFriends.concat([user]);

  notRecommendList.forEach((name) => {
    if (name in weightValues) {
      weightValues[name] = 0;
    }
  });

  let candidates = [];

  for (let key in weightValues) {
    if (weightValues.hasOwnProperty(key) && weightValues[key] !== 0) {
      candidates.push([key, weightValues[key]]);
    }
  }

  candidates.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] === b[1]) {
      if (a[0] >= b[0]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  });

  let recommendUsers = [];

  for (let i = 0; i < Math.min(candidates.length, 5); i++) {
    recommendUsers.push(candidates[i][0]);
  }

  return recommendUsers;
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  const userFriendMap = getUserFriendMap(user, friends);

  const recommendList = getScore(user, userFriendMap, visitors).sort((a, b) =>
    sortFunc(a, b)
  );

  const answer = recommendList.slice(0, 5).map((elem) => {
    return elem[0];
  });
  return answer;
}

function getUserFriendMap(user, friends) {
  let tempMap = new Map();
  tempMap.set(user, []);

  for (elem of friends) {
    const [a, b] = elem;

    if (tempMap.has(a)) {
      tempMap.set(a, tempMap.get(a).concat(b));
    } else {
      tempMap.set(a, [b]);
    }

    if (tempMap.has(b)) {
      tempMap.set(b, tempMap.get(b).concat(a));
    } else {
      tempMap.set(b, [a]);
    }
  }
  return tempMap;
}

function getScore(user, userFriendMap, visitors) {
  let recommendList = new Map();
  for (let elem of userFriendMap.get(user)) {
    for (let friend of userFriendMap.get(elem)) {
      if (friend !== user) {
        recommendList.set(friend, 10 + (recommendList.get(friend) || 0));
      }
    }
  }

  visitors.forEach((visitor) => {
    recommendList.set(visitor, 1 + (recommendList.get(visitor) || 0));
  });

  userFriendMap.get(user).forEach((friend) => {
    recommendList.delete(friend);
  });

  return Array.from(recommendList);
}

function sortFunc(a, b) {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else return 0;
  }
}

module.exports = problem7;

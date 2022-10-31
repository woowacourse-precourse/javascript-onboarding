function problem7(user, friends, visitors) {
  const recommendUser = new Map();
  const friendMap = new Map();
  friends.forEach((friend) => {
    if (friendMap.has(friend[0])) {
      friendMap.set(friend[0], [...friendMap.get(friend[0]), friend[1]]);
    } else {
      friendMap.set(friend[0], [friend[1]]);
    }

    if (friendMap.has(friend[1])) {
      friendMap.set(friend[1], [...friendMap.get(friend[1]), friend[0]]);
    } else {
      friendMap.set(friend[1], [friend[0]]);
    }
  });

  const userFriends = friendMap.get(user) || [];

  for (const [person, freindList] of friendMap) {
    if (person === user) continue;

    let isNear = false;
    for (const friend of freindList) {
      if (userFriends.includes(friend)) {
        isNear = true;
        break;
      }
    }
    if (isNear) {
      recommendUser.set(person, 10);
    }
  }

  for (const visitor of visitors) {
    if (userFriends.includes(visitor)) continue;
    if (recommendUser.has(visitor)) {
      recommendUser.set(visitor, recommendUser.get(visitor) + 1);
    } else {
      recommendUser.set(visitor, 1);
    }
  }

  return recommendUser;
}

module.exports = problem7;

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

  return recommendUser;
}

module.exports = problem7;

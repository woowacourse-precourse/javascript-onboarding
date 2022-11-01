function problem7(user, friends, visitors) {
  const friendsMap = new Map();
  const scoreMap = new Map();

  for (const friendLink of friends) {
    const [friend1, friend2] = friendLink;

    if (friendsMap.has(friend1)) {
      if (friendsMap.has(friend2)) {
        friendsMap.get(friend1).push(friend2);
        friendsMap.get(friend2).push(friend1);
      } else {
        friendsMap.get(friend1).push(friend2);
        friendsMap.set(friend2, [friend1]);
      }
    } else if (friendsMap.has(friend2)) {
      if (friendsMap.has(friend1)) {
        friendsMap.get(friend2).push(friend1);
        friendsMap.get(friend1).push(friend2);
      } else {
        friendsMap.get(friend2).push(friend1);
        friendsMap.set(friend1, [friend2]);
      }
    } else {
      friendsMap.set(friend1, [friend2]);
      friendsMap.set(friend2, [friend1]);
    }
  }

  for (const visitor of visitors) {
    if (scoreMap.has(visitor)) {
      scoreMap.set(visitor, scoreMap.get(visitor) + 1);
    } else {
      scoreMap.set(visitor, 1);
    }
  }

  const myFriendsList = friendsMap.get(user) || [];

  const friendsMapEntries = [...friendsMap.entries()];

  for (const [friend, friendList] of friendsMapEntries) {
    if (friend === user) {
      continue;
    }

    const filteredFriendList = friendList.filter((friend) => {
      return myFriendsList.includes(friend);
    });

    if (filteredFriendList.length > 0) {
      if (scoreMap.has(friend)) {
        scoreMap.set(
          friend,
          scoreMap.get(friend) + filteredFriendList.length * 10
        );
      } else {
        scoreMap.set(friend, filteredFriendList.length * 10);
      }
    }
  }

  const scoreMapEntries = [...scoreMap.entries()];
  console.log(scoreMapEntries);

  const answer = [...scoreMap.entries()]
    .filter(([key, value]) => {
      return !myFriendsList.includes(key) && value > 0;
    })
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
    .slice(0, 5);

  return answer;
}

module.exports = problem7;

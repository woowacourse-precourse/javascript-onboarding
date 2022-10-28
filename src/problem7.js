function problem7(user, friends, visitors) {
  let answer;

  const friendSet = new Set();
  friends.forEach((friendArr) => {
    friendArr.forEach((friend, idx) => {
      if (friend === user) friendSet.add(friendArr[1 - idx]);
    });
  });

  const friendMap = new Map();
  friends.forEach((friendArr) => {
    friendArr.forEach((friend, idx) => {
      if (friendSet.has(friend)) {
        const targetFriend = friendArr[1 - idx];

        if (targetFriend === user) return;

        friendMap.set(
          targetFriend,
          friendMap.has(targetFriend) ? friendMap.get(targetFriend) + 10 : 10
        );
      }
    });
  });

  visitors.forEach((visitor) => {
    friendMap.set(
      visitor,
      friendMap.has(visitor) ? friendMap.get(visitor) + 1 : 1
    );
  });

  answer = [...friendMap.entries()]
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] === b[1]) if (a[0] < b[0]) return -1;

      return 1;
    })
    .map((map) => map[0])
    .slice(0, 3);

  return answer;
}

module.exports = problem7;

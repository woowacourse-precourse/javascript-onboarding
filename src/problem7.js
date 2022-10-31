function problem7(user, friends, visitors) {
  const userFriendList = [];
  const newFriendList = [];
  const scoreMap = new Map();

  friends.forEach((friend) => {
    if (friend.includes(user)) {
      const [userFriend] = friend.filter((name) => name !== user);
      userFriend && userFriendList.push(userFriend);
    }
  });

  friends.forEach((friend) => {
    userFriendList.forEach((userFriend) => {
      if (friend.includes(userFriend)) {
        const [newFriend] = friend.filter((name) => name !== userFriend && name !== user);
        newFriend && newFriendList.push(newFriend);
      }
    });
  });

  newFriendList.forEach((newFriend) => {
    if (scoreMap.has(newFriend)) {
      scoreMap.set(newFriend, scoreMap.get(newFriend) + 10);
    } else {
      scoreMap.set(newFriend, 10);
    }
  });

  visitors.forEach((visitor) => {
    if (!userFriendList.includes(visitor)) {
      if (scoreMap.has(visitor)) {
        scoreMap.set(visitor, scoreMap.get(visitor) + 1);
      } else {
        scoreMap.set(visitor, 1);
      }
    }
  });

  const sortedRecommendationList = [...scoreMap.entries()].sort(([name1, score1], [name2, score2]) => {
    if (score1 > score2) return -1;
    if (score1 < score2) return 1;
    return name1 > name2 ? 1 : -1;
  });

  return sortedRecommendationList.map(([name]) => name).slice(0, 5);
}

module.exports = problem7;

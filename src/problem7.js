function problem7(user, friends, visitors) {
  const answer = [];
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

  return answer;
}

module.exports = problem7;

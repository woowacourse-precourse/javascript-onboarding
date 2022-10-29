function problem7(user, friends, visitors) {
  const answer = [];
  const userFriendList = [];
  const newFriendList = [];

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

  return answer;
}

module.exports = problem7;

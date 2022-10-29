function problem7(user, friends, visitors) {
  const answer = [];
  const userFriendList = [];

  friends.forEach((friend) => {
    if (friend.includes(user)) {
      const [userFriend] = friend.filter((name) => name !== user);
      userFriendList.push(userFriend);
    }
  });

  return answer;
}

module.exports = problem7;

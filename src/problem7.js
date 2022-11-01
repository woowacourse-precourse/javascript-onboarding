function problem7(user, friends, visitors) {
  const getFriends = (user, friends) => {
    const user_friends = [];
    for (let friend of friends) {
      if (friend.includes(user)) user_friends.push(friend[0]);
    }
    return user_friends;
  };

  let answer;
  return answer;
}

module.exports = problem7;

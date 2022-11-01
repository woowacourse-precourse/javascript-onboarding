function problem7(user, friends, visitors) {
  const userFriends = [];
  const friendsWithScores = new Map();

  const strangerFriends = friends.filter((friend) => {
    if (friend.includes(user)) {
      userFriends.push(...friend.filter((each) => each !== user));
      return false;
    } else {
      return true;
    }
  });

  strangerFriends.forEach((friend) => {
    const [a, b] = friend;
    if (userFriends.includes(a) || userFriends.includes(b)) {
      friendsWithScores.set(a, friendsWithScores.get(a) + 10 || 10);
      friendsWithScores.set(b, friendsWithScores.get(b) + 10 || 10);
    }
  });

  visitors.forEach((visitor) => {
    friendsWithScores.set(visitor, friendsWithScores.get(visitor) + 1 || 1);
  });

  userFriends.forEach((myFriend) => {
    friendsWithScores.delete(myFriend);
  });

  const sortedStrangers = [...friendsWithScores].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  const answer = sortedStrangers
    .filter((each) => each[1] !== 0)
    .map((each) => each[0])
    .slice(0, 5);

  return answer;
}

module.exports = problem7;

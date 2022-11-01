function problem7(user, friends, visitors) {
  const myFriends = [];
  const strangersWithScores = {};

  const strangerFriends = friends.filter((friend) => {
    if (friend.includes(user)) {
      myFriends.push(...friend.filter((each) => each !== user));
      return false;
    } else {
      return true;
    }
  });

  [...strangerFriends.flat(1), ...visitors].forEach((each) => {
    strangersWithScores[each] = 0;
  });

  strangerFriends.forEach((friend) => {
    const [a, b] = friend;
    if (myFriends.includes(a) || myFriends.includes(b)) {
      strangersWithScores[a] += 10;
      strangersWithScores[b] += 10;
    }
  });

  visitors.forEach((visitor) => {
    strangersWithScores[visitor] += 1;
  });

  myFriends.forEach((myFriend) => {
    delete strangersWithScores[myFriend];
  });

  const sortedStrangers = Object.entries(strangersWithScores).sort((a, b) => {
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

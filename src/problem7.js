const problem7 = (user, friends, visitors) => {
  let answer = [];
  let friendsOfUser = [];
  let scoreList = new Map();

  friends.forEach((friend) => {
    if (friend.includes(user)) {
      friendsOfUser = [
        ...friendsOfUser,
        friend.indexOf(user) === 0 ? friend[1] : friend[0],
      ];
    }
  });

  [...new Set(friends.flat()), ...new Set(visitors)].forEach((person) =>
    scoreList.set(person, 0)
  );

  return answer;
};

module.exports = problem7;

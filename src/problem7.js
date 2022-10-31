const problem7 = (user, friends, visitors) => {
  let answer = [];
  let friendsOfUser = [];
  let scoreList = new Map();
  let results = {};

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

  friends.forEach((friend) =>
    friend.forEach((person) => {
      if (friendsOfUser.includes(person)) {
        const targetPerson =
          friend.indexOf(person) === 0 ? friend[1] : friend[0];
        const score = scoreList.get(targetPerson) + 10;
        scoreList.set(targetPerson, score);
      }
    })
  );

  visitors.forEach((visitor) => {
    const score = scoreList.get(visitor) + 1;
    scoreList.set(visitor, score);
  });

  [...friendsOfUser, user].forEach((deleteTarget) =>
    scoreList.delete(deleteTarget)
  );

  // prettier-ignore
  [...scoreList.entries()].forEach(([name, score]) =>
    (results = { ...results, [name]: score }));

  answer = Object.keys(results).sort((a, b) => {
    if (results[a] === results[b]) {
      a - b;
    } else results[b] - results[a];
  });

  return answer;
};

module.exports = problem7;

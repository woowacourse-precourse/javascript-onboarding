const problem7 = (user, friends, visitors) => {
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
  scoreList.forEach((score, person) => {
    if (score === 0) scoreList.delete(person);
  });

  // prettier-ignore
  [...scoreList.entries()].forEach(([name, score]) =>
    (results = { ...results, [name]: score }));

  return Object.keys(results)
    .sort((a, b) =>
      results[a] === results[b] ? a < b : results[b] - results[a]
    )
    .slice(0, 5);
};

module.exports = problem7;

function problem7(user, friends, visitors) {
  const recommendScoreObj = {};

  const userFriends = friends
    .filter((el) => el.includes(user))
    .flat()
    .filter((el) => el !== user);

  const recommandedFriends = friends.filter((el) => {
    const [A, B] = el;
    if (
      (userFriends.includes(A) || userFriends.includes(B)) &&
      !el.includes(user)
    ) return el;
  });

  for (const recommandedFriend of recommandedFriends) {
    const [A, B] = recommandedFriend;
    if (A in recommendScoreObj) recommandedFriend[A] += 10;
    else if (B in recommendScoreObj) recommandedFriend[B] += 10;
    else {
      if (userFriends.includes(A)) recommendScoreObj[B] = 0;
      else recommendScoreObj[A] = 0;
    }
  }

  for (const visitor of visitors) {
    if (visitor in recommendScoreObj) recommendScoreObj[visitor] += 1;
    else recommendScoreObj[visitor] = 1;
  }

  const result = [];
  for (const name in recommendScoreObj) {
    if (!userFriends.includes(name)) result.push([name, recommendScoreObj[name]]);
  }

  return result
    .sort((a, b) => {
      if (b[1] > a[1]) return 1;
      if (a[1] < b[1]) return -1;
      if (a[1] === b[1]) return a[0] < b[0] ? -1 : 1;
    })
    .map((el) => el[0])
    .slice(0, 5);
}

module.exports = problem7;

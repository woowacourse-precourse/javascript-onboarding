function problem7(user, friends, visitors) {
  const userFrineds = (user, relation) => {
    return relation
      .filter((findUser) => findUser.includes(user))
      .map(([isUSer, isFriend]) => (isUSer === user ? isFriend : isUSer));
  };

  const unknownFriends = (user, alreadyFrineds, friends) => {
    return [
      ...new Set(
        friends
          .flat()
          .filter((un) => !alreadyFrineds.includes(un) && user !== un)
      ),
    ];
  };

  const foafCnt = (friends, alreadyFrineds, unknown) => {
    return friends
      .filter(
        ([one, other]) =>
          (alreadyFrineds.includes(one) && unknown.includes(other)) ||
          (alreadyFrineds.includes(other) && unknown.includes(one))
      )
      .map(([one, other]) => (unknown.includes(one) ? [one, 10] : [other, 10]));
  };

  const visitedCnt = (visitors, unknown) => {
    return visitors
      .filter((visitor) => unknown.includes(visitor))
      .map((visitor) => [visitor, 1]);
  };

  const highScore = (scoreList) => {
    const recommendList = [];
    const recommendListKey = [...new Set(scoreList.map(([name, _]) => name))];
    recommendListKey.forEach((name) => recommendList.push([name, 0]));
    scoreList.forEach(
      ([name, score]) =>
        (recommendList[recommendListKey.indexOf(name)][1] += score)
    );
    return recommendList
      .sort()
      .sort((a, b) => b[1] - a[1])
      .map(([name, _]) => name)
      .slice(0, 5);
  };

  const alreadyFrineds = userFrineds(user, friends);
  const unknown = unknownFriends(user, alreadyFrineds, [...friends, visitors]);
  const friendScore = foafCnt(friends, alreadyFrineds, unknown);
  const visitorsScore = visitedCnt(visitors, unknown);

  return highScore([...friendScore, ...visitorsScore]);
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  const userFrineds = (user, relation) => {
    return relation
      .filter((x) => x[0] === user || x[1] === user)
      .map((x) => (x[0] === user ? x[1] : x[0]));
  };

  const foafCnt = (relation, friends, user) => {
    const foafRel = relation.filter(
      (x) =>
        !x.includes(user) &&
        (friends.includes(x[0]) || friends.includes(x[1])) &&
        !(friends.includes(x[0]) && friends.includes(x[1]))
    );

    return foafRel.map((x) =>
      friends.includes(x[0]) ? [x[1], 10] : [x[0], 10]
    );
  };

  const visitedCnt = (visitors, alreadyFrineds) => {
    return visitors
      .filter((x) => !alreadyFrineds.includes(x))
      .map((x) => [x, 1]);
  };

  const highScore = (arr) => {
    const recommendList = [];
    const recommendListKey = [...new Set(arr.map((x) => x[0]))];
    recommendListKey.forEach((x) => recommendList.push([x, 0]));
    arr.forEach(
      (x) => (recommendList[recommendListKey.indexOf(x[0])][1] += x[1])
    );

    return recommendList
      .sort()
      .sort((a, b) => (b[1] > a[1] ? 1 : a[1] > b[1] ? -1 : 0))
      .map((x) => x[0])
      .slice(0, 5);
  };

  const alreadyFrineds = userFrineds(user, friends);
  const foaf = foafCnt(friends, alreadyFrineds, user);
  const visit = visitedCnt(visitors, alreadyFrineds);

  return highScore([...visit, ...foaf]);
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  const userFrineds = (user, relation) => {
    return relation
      .filter((x) => x[0] === user || x[1] === user)
      .map((x) => (x[0] === user ? x[1] : x[0]));
  };

  const foafCnt = (relation, friends, user) => {
    const foafRel = relation.filter(
      (x) =>
        !x.includes(user) && (friends.includes(x[0]) || friends.includes(x[1]))
    );

    const foafPerson = foafRel.map((x) =>
      friends.includes(x[0]) ? x[1] : x[0]
    );
    return foafPerson.map((x) => [x, 10]);
  };

  const visitedCnt = (visitors, alreadyFrineds) => {
    visitors = visitors.filter((x) => !alreadyFrineds.includes(x));
    return visitors.map((x) => [x, 1]);
  };

  const highScore = (arr) => {
    const recommendList = [];
    const recommendListKey = [...new Set(arr.map((x) => x[0]))];
    recommendListKey.forEach((x) => recommendList.push([x, 0]));
    arr.forEach(
      (x) => (recommendList[recommendListKey.indexOf(x[0])][1] += x[1])
    );
    return recommendList
      .sort((a, b) => b[1] - a[1])
      .map((x) => x[0])
      .slice(0, 5);
  };

  const alreadyFrineds = userFrineds(user, friends);
  const foaf = foafCnt(friends, alreadyFrineds, user);
  const visit = visitedCnt(visitors, alreadyFrineds);

  return highScore([...visit, ...foaf]);
}

module.exports = problem7;

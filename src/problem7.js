function problem7(user, friends, visitors) {
  // 친구는 모조건 1이상 있음, 방문자는 없을 수도 있다.
  //   점수가 0초과 최대 5명까지만 추천
  //   사용자와 함께 아는 친구 구하기

  //   사용자의 친구 구하기
  const userFrineds = (user, relation) => {
    return relation
      .filter((x) => x[0] === user || x[1] === user)
      .map((x) => (x[0] === user ? x[1] : x[0]));
  };

  // 친구와 함께 아는 친구 숫자 구하기
  const foafCnt = (relation, friends, user) => {
    const foafRel = relation.filter(
      (x) =>
        !x.includes(user) && (friends.includes(x[0]) || friends.includes(x[1]))
    );

    const foafPerson = foafRel.map((x) =>
      friends.includes(x[0]) ? x[1] : x[0]
    );
    // const arr = [];
    // foafPerson.forEach((element) => {
    //   arr.push([element, 10]);
    // });
    console.log(foafPerson.map((x) => [x, 10]));
    // console.log(arr);
    return foafPerson.map((x) => [x, 10]);
  };

  // 방문 횟수에 따른 점수 구하기
  const visitedCnt = (visitors, alreadyFrineds) => {
    visitors = visitors.filter((x) => !alreadyFrineds.includes(x));
    // const arr = [];
    // visitors.forEach((element) => {
    //   arr.push([element, 1]);
    // });
    return visitors.map((x) => [x, 1]);
  };

  const alreadyFrineds = userFrineds(user, friends);
  const foaf = foafCnt(friends, alreadyFrineds, user);
  console.log(userFrineds(user, friends));
  console.log(foaf);
}

module.exports = problem7;

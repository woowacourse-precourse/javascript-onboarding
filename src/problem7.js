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

  console.log(userFrineds(user, friends));
}

module.exports = problem7;

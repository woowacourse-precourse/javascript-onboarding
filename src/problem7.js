function problem7(user, friends, visitors) {
  // 추천 점수 선언
  const SCORE = {
    FRIENDS: 10,
    VISITOR: 1,
  };

  let recommendScore = {}

  // user의 친구를 가져온다.
  const userFriends = findUserFriends(user, friends);

  // user의 친구 목록을 반복문으로 돌린다.
  userFriends.forEach((name) => {
    // user의 친구 목록에 있는 친구의 친구를 가져온다.
    const neighbourhood = findUserFriends(name, friends).filter((ele)=> ele != user);
    // 만약 유저의 친구의 친구가 유저의 친구가 아니라면 점수를 더해준다.
    neighbourhood.forEach((name_) => {
      if(!userFriends.includes(name_))
        recommendScore[name_] ? recommendScore[name_] += SCORE.FRIENDS : recommendScore[name_] = SCORE.FRIENDS; 
    });
  });

  // user의 친구가 아닌 방문자들만 1점씩 더해준다.
  visitors.filter((visitor) => !userFriends.includes(visitor)).forEach((visitor) => {
    recommendScore[visitor] ? recommendScore[visitor] += SCORE.VISITOR : recommendScore[visitor] = SCORE.VISITOR; 
  });

  let scoreArray = Object.entries(recommendScore);
  
  return scoreArray.sort(( [nameA, scoreA], [nameB, scoreB] )=> {
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  })
  .sort(( [nameA, scoreA], [nameB, scoreB] ) => scoreB - scoreA)
  .map(([name, _])=> name).splice(0, 5);
}

// 매개변수 user의 친구들을 찾는 함수
const findUserFriends = (user, friends) => {
  return friends
          .filter(([name1, name2]) => name1 === user || name2 === user)
          .map(([name1, name2]) => name1 === user ? name2 : name1);
}

module.exports = problem7;

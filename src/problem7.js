function problem7(user, friends, visitors) {
  // 추천 점수 선언
  const SCORE = {
    FRIENDS: 10,
    VISITOR: 1,
  };

  // user의 친구를 가져온다.
  const userFriends = findUserFriends(user, friends);

  // user의 친구 목록을 반복문으로 돌린다.
  userFriends.forEach((name) => {
    // user의 친구 목록에 있는 친구의 친구를 가져온다.
    const neighbourhood = findUserFriends(name, friends).filter((ele)=> ele != user);
  });
}

// 매개변수 user의 친구들을 찾는 함수
const findUserFriends = (user, friends) => {
  return friends
          .filter(([name1, name2]) => name1 === user || name2 === user)
          .map(([name1, name2]) => name1 === user ? name2 : name1);
}

module.exports = problem7;

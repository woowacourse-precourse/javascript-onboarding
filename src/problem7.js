function problem7(user, friends, visitors) {
  /*
  기능 목록
  1. user의 친구 목록 생성 (추후 친구의 친구 매핑 위해 객체로)
  2. 추천할 타겟 목록 생성
  3. user의 친구의 친구 찾아서 친구 목록 키에 대해 매핑 및 타겟 목록에 추가하여 점수 +10
  4. 방문자 중 친구가 아닌 사람을 타겟에 추가 및 점수 +1
  5. 점수 내림차순 및 점수 동일 시 사전순 정렬 로직 구현
  6. 추천할 타겟들의 이름을 정렬 로직으로 정렬하여 반환
  */
  
  // user의 친구 찾기
  const usersFriends = {};

  for (i = 0; i < friends.length; i++){
    if (friends[i].includes(user)) {
      const friend = friends[i].filter(v => v !== user);
      usersFriends[friend] = [];
    }
  }

  // 추천할 친구 목록
  const recommendUsers = {};
}

module.exports = problem7;

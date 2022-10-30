function problem7(user, friends, visitors) {
  const friendOfUser = friends.map((i) => i[0]);
  const friendOfFriend = friemds.map((i) => {
    let resultValue;
    const friendValue = isCurrentFriend(i, friendOfUser);
  });

  answer = 1;
  return answer;
}

module.exports = problem7;

const isCurrentFriend = (name, friendOfUser) => {
  let resultValue;
  if (friendOfUser.includes(name)) {
    resultValue = true;
  }
  resultValue = false;

  return resultValue;
};
/*
 친구 추천 알고리즘
 사용자와 함께 아는 친구의 수 = 10점
 사용자의 타임라인에 방문한 횟수 = 1점

 user : 유저 이름
 friends : 친구 관계가 담긴 2차원 배열.
 visitors : 타임라인 방문 기록

 ## result 정렬.
 점수가 높은 순으로 최대 5명 정렬.
 점수 같은 경우엔 이름순으로 정렬.

 ## 구현할 것
 1. 현재 친구 : friends.map((i)=>i[0]);
   - 추천 친구에서 제외해야함.
 2. 친구의 친구 : friends.map((i)=>i[1]);
   1) 본인, 현재 친구 제외
   2) 점수 부여
   3) sort후 return
     - 동일 점수시 이름 순으로 정렬.
 */

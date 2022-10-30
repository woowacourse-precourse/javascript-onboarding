function problem7(user, friends, visitors) {
  const friendOfUser = friends.map((i) => i[0]);
  const friendOfFriend = searchByFriends(user, friends, friendOfUser);

  console.log(friendOfFriend);
  let answer;
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
  1) friends의 두 번째 요소들과 visitor를 concat으로 합치기
  2) 중복을 제거
  3) object 생성.
  
*/
const searchByFriends = (user, friends, friendOfUser) => {
  const newFriendsFilter = friends.filter((i) => {
    let resultValue;
    const currentFriend = isCurrentFriend(i[1], friendOfUser);
    if (i[1] !== user && !currentFriend) {
      resultValue = true;
    } else {
      resultValue = false;
    }

    return resultValue;
  });

  const newFriends = newFriendsFilter.map((i) => i[1]);
  const returnValue = newFriends.filter((v, i) => newFriends.indexOf(v) === i);

  return returnValue;
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

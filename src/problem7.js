function problem7(user, friends, visitors) {
  var answer;

  // - [x] 유저(mrko)의 친구 찾기
  const userFriends = friends
    .filter((friend) => friend.includes(user))
    .map((friend) => friend.filter((_friend) => _friend !== user))
    .flat(1);

  // - [x] 유저(mrko)의 친구의 친구 찾기
  let friendsOfFriends = friends
    .filter((friend) => !friend.includes(user))
    .map((friend) => friend.filter((name) => !userFriends.includes(name)))
    .flat(1);

  const removeOverlap = (array) => [...new Set(array)];
  friendsOfFriends = removeOverlap(friendsOfFriends);

  // - [ ] 결과 반환하기
  //    - 점수가 가장 높은 순으로 최대 5명 반환한다.
  //    - 추천 점수 0 -> 반환 안한다.
  //    - 추천 점수 같음 -> 이름순으로 정렬한다.

  return answer;
}

module.exports = problem7;

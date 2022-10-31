function problem7(user, friends, visitors) {
  const VISIT_SCORE = 1;
  const FRIEND_WITH_USER_SCORE = 10;

  function createFriendsTable(friends) {
    const table = {};

    for (let friend of friends) {
      const [A, B] = friend;

      addFriend(table, A, B);
      addFriend(table, B, A);
    }

    return table;
  }
}

module.exports = problem7;

// 일단 친구 목록이랑 점수를 테이블로 만듬.
// 내 친구 이름을 키로 해서 친구의 친구들은 다 +10 ( 나 자신 빼고 )
// 방문자는 따로 +1
// hash keys 돌면서 점수가 0이 아니면 배열에 다 밖음 ( 나 자신 빼고 )
// 점수로 정렬해서 5명 짜름
// 점수 같은경우 이름으로 정렬

// 친구 추천이니까 이미 친구는 뺴고 return

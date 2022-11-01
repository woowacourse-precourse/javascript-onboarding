function problem7(user, friends, visitors) {
  let realFriend = []; //user의 친구 배열
  for (let i = 0; i < friends.length; i++) { /* realFriend 배열 구하는 과정 */
    if (friends[i].includes(user))
      friends[i][0] == user
        ? realFriend.push(friends[i][1])
        : realFriend.push(friends[i][0]);
  } //user 친구가 저장된 배열 realFriend 생성.

  let friendScore = new Map(); //추천 점수 key-value 값
  for (let i = 0; i < friends.length; i++) {
    if (!friends[i].includes(user)) { /* friends에서 user와의 관계가 아닌 경우 */
      if (
        realFriend.includes(friends[i][0]) &&
        !realFriend.includes(friends[i][1])
      ) /* friend의 관계도(i1, i2)에서 i1은 realfriend이고 i2는 아닌 경우(i2 추천 점수 +10점) */
        friendScore.get(friends[i][1])
          ? friendScore.set(friends[i][1], friendScore.get(friends[i][1]) + 10)
          : friendScore.set(friends[i][1], 10);
      if (
        !realFriend.includes(friends[i][0]) &&
        realFriend.includes(friends[i][1])
      ) /* friend의 관계도(i1, i2)에서 i1은 realfriend이고 i2는 아닌 경우(i1 추천 점수 +10점) */
        friendScore.get(friends[i][0])
          ? friendScore.set(friends[i][0], friendScore.get(friends[i][0]) + 10)
          : friendScore.set(friends[i][0], 10);
    }
  }
  for (let i = 0; i < visitors.length; i++) { /* visitor들의 방문 활동에 대한 추천 점수 부여(user와 이미 친구인 사람은 미부여)(+1점) */
    if (!realFriend.includes(visitors[i])) {
      if (friendScore.get(visitors[i]))
        friendScore.set(visitors[i], friendScore.get(visitors[i]) + 1);
    else friendScore.set(visitors[i], 1);
    }
  }
  let new_FriendScore = new Map([...friendScore].sort((a, b) => b[1] - a[1])); // friendScore를 value 값을 기준으로 내림차수 정렬
  var answer = Array.from(new_FriendScore.keys()).slice(0, 5); // 최대 5개까지의 친구 추천 순위 get
  return answer;
}

module.exports = problem7;

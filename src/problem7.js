function filterRealFriends(user, friends) {
  let array = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      array.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      array.push(friends[i][0]);
    }
  }
  return array;
}

function problem7(user, friends, visitors) {
  var answer = [];
  let realFriends;
  let dict;
  let limit; // 최대 5명 까지 추천이므로, 제한 변수.

  // user의 친구를 담은 배열 realFriends 만들기.
  realFriends = filterRealFriends(user, friends);
  return answer;
}

module.exports = problem7;

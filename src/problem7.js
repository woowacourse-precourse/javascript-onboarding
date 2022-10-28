function problem7(user, friends, visitors) {
  var answer;
  // 사용자와 친구관계인 사람 찾기
  let current_friends = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (user == friends[i][j]) {
        // j가 0이면 1로, 1이면 0으로 바꾸기
        current_friends.push(friends[i][1 - j]);
      }
    }
  }

  // 추천 친구 목록 만들기
  let recommendations = [];
  for (let i = 0; i < current_friends.length; i++) {
    // 2-1. 사용자 친구의 친구 찾기
    for (let j = 0; j < friends.length; j++) {
      for (let k = 0; k < 2; k++) {
        if (current_friends[i] == friends[j][k]) {
          // 추천친구목록에 추가
          recommendations.push([friends[j][1 - k], 10]);
        }
      }
    }
  }

  return answer;
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;

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
  console.log(current_friends);
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

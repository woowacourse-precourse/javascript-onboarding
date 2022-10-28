function problem7(user, friends, visitors) {
  var answer;

  filteredFreinds(user, friends);
  return answer;
}

// 1. USER 의 친구를 거르는 기능
function filteredFreinds(user, friends) {
  const arr = friends.filter((t) => {
    return t.includes(user);
  });
  return arr;
}
// 2. 친구의 카운트를 세서 점수 계산하는  기능
function friendsRecomandScore(id) {}
// 3. VISITOR의 카운트를 세서 점수 계산하는 기능
function visiterRecomanScore(visitors) {}
// 4. 점수가 가장 높은 순으로 정렬,친구 추천 기능
function scoreSortRecomandFreinds(score) {}

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

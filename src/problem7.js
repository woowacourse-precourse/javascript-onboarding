// 각 사용자의 친구 관계를 확인할 수 있는 기능
function getFriendsMap(friends) {
  const map = new Map();
  friends.forEach((friend) => {
    map.has(friend[0])
      ? map.get(friend[0]).push(friend[1])
      : map.set(friend[0], [friend[1]]);
    map.has(friend[1])
      ? map.get(friend[1]).push(friend[0])
      : map.set(friend[1], [friend[0]]);
  });
  return map;
}

// solution
function solution(user, friends, visitors) {
  const friendsMap = getFriendsMap(friends);
  console.log(friendsMap);
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

solution(
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

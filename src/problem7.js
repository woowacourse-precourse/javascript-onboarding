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

// 본인과 본인의 친구들을 친구 추천에서 제외하는 기능
function getExcludedFriends(user, friendsMap) {
  const map = new Map();
  map.set(user, true);
  friendsMap.get(user).forEach((friend) => map.set(friend, true));
  return map;
}

// solution
function solution(user, friends, visitors) {
  const friendsMap = getFriendsMap(friends);
  const excludedFriends = getExcludedFriends(user, friendsMap);
  console.log(excludedFriends);
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

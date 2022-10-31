// @ts-check

/**
 * @param {string} user
 * @param {string[][]} friends
 * @param {string[]} visitors
 * @returns {string[]}
 */
function problem7(user, friends, visitors) {
  const hashMap = new Map();
  const userFriendArr = [];

  // 사용자와 친구인 아이디 배열 구하기
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      userFriendArr.push(friend.filter((name) => name !== user).pop());
    }
  });

  // 사용자와 함께 아는 친구의 수만큼 10점 부여
  userFriendArr.forEach((userFriend) => {
    friends.forEach((friend) => {
      if (friend.includes(userFriend)) {
        const acquaintance = friend.filter((name) => name !== userFriend).pop();
        if (acquaintance !== user) {
          hashMap.set(
            acquaintance,
            hashMap.has(acquaintance) ? hashMap.get(acquaintance) + 10 : 10
          );
        }
      }
    });
  });

  // 사용자의 타임 라인에 방문한 횟수만큼 1점 부여
  visitors
    .filter((visitor) => !userFriendArr.includes(visitor))
    .forEach((visitor) =>
      hashMap.set(visitor, hashMap.has(visitor) ? hashMap.get(visitor) + 1 : 1)
    );

  // 조건에 맞게 정렬해서 최대 5명 반환
  return [...hashMap.entries()]
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      } else return b[1] - a[1];
    })
    .map((e) => e[0])
    .slice(0, 5);
}

console.log(
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
  )
); // ["andole", "jun", "bedi"]

module.exports = problem7;

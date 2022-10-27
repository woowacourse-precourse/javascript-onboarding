/**
 *
 * @param {*} user
 * "mrko"
 * @param {*} friends
 * [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
 * @param {*} visitors
 * ["bedi", "bedi", "donut", "bedi", "shakevan"]
 * @returns
 * ["andole", "jun", "bedi"]
 */
/**
 * 나 : mrko
 * --------------- 친구사이 +10
 * donut <-> andole
 * donut <-> jun
 * donut <-> mrk
 * shakevan <-> andole
 * shakevan <-> jun
 * shakevan <-> mrko
 * ---------------- 방문기록 +1
 * bedi,bedi,donut,bedi,shakevan
 * ---------------- 결과
 * andole,jun,bedi
 *
 *
 * mrko(나와친구사이) -> shakevan. donut 점수에서 제외
 * shakevan과 친구사이면 + 10
 * donut과 친구사이면 + 10
 * andole +10 +10
 * jun  +10 + 10
 * bedi +1 +1 +1
 *
 */
function problem7(user, friends, visitors) {
  const answer = [];
  const arr = [];
  friends.forEach((x) => x.forEach((y) => arr.push(y)));
  const people = new Set(visitors.concat(arr));
  const rankMap = new Map();
  people.forEach((x) => rankMap.set(x, 0));
  const myFriend = [];

  // 내 친구 목록 만들기
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      myFriend.push(friends[i][1]);
    } else if (friends[i][1] === user) {
      myFriend.push(friends[i][0]);
    }
  }

  // 내 친구의 친구 찾기
  for (let k = 0; k < friends.length; k++) {
    if (myFriend.some((x) => x === friends[k][0])) {
      rankMap.set(friends[k][1], rankMap.get(friends[k][1]) + 10);
    }
    if (myFriend.some((x) => x === friends[k][1])) {
      rankMap.set(friends[k][0], rankMap.get(friends[k][0]) + 10);
    }
  }
  // 방문 점수 더하기
  for (let i = 0; i < visitors.length; i++) {
    rankMap.set(visitors[i], rankMap.get(visitors[i]) + 1);
  }

  for (const [name, rank] of rankMap) {
    answer.push([name, rank]);
  }

  // 나와 내 친구들
  const meAndMyFriend = [...myFriend, user];
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    if (!meAndMyFriend.some((x) => x === answer[i][0])) {
      result.push(answer[i]);
    }
  }
  return result.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}

module.exports = problem7;

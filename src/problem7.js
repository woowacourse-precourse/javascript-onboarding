/**
 *
 * @param {*} user
 * @param {*} friends
 * @param {*} visitors
 * @returns
 *
 * 기능 구현
 * 1. 점수를 기록할 장소만들기
 * 2. 나와 친구인 사람들의 목록 만들기
 * 3. 나와 친구인 사람과 친구인 사람 찾아서 10점씩 주기
 * 4. 방문한 사람(visitors)들에게 1점씩 주기
 */
function problem7(user, friends, visitors) {
  // 점수 기록할 맵 생성
  const answer = [];
  const arr = [];
  friends.forEach((x) => x.forEach((y) => arr.push(y)));
  const people = new Set(visitors.concat(arr));
  const rankMap = new Map();
  people.forEach((x) => rankMap.set(x, 0));

  // 내 친구 목록 만들기
  const myFriend = [];
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
  // 방문 점수 맵 -> 배열
  for (const [name, rank] of rankMap) {
    answer.push([name, rank]);
  }

  // 나와 내 친구들을 제외한 멤버들을 배열로 만들기
  const meAndMyFriend = [...myFriend, user];
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    if (!meAndMyFriend.some((x) => x === answer[i][0])) {
      result.push(answer[i]);
    }
  }

  // 결과 점수가 큰 순으로 정렬하기
  return result.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}

module.exports = problem7;

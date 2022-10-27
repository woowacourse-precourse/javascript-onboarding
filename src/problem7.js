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
}

module.exports = problem7;

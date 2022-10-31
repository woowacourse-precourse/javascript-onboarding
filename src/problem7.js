function problem7(user, friends, visitors) {
  let answer = [];
  let result = [];
  let map = new Map();

  // friens 확인
  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let a of friend) {
        // 함께 아는 친구 10점
        map.set(a, 10);
      }
    } else {
      for (let a of friend) {
        // 원래 친구 0점
        map.set(a, 0);
      }
    }
  }
  // console.log(map);

  return answer;
}

module.exports = problem7;

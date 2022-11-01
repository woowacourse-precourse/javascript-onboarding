function problem7(user, friends, visitors) {
  let answer = [];
  let map = new Map();
  //friends 배열을 기준으로 점수를 합산
  for (let friend of friends) {
    if (friend.includes(user)) {
      for (let x of friend) {
        map.set(x, 0);
      }
    } else {
      for (let a of friend) {
        if (map.has(a)) {
          map.set(a, map.get(a) + 10);
        } else map.set(a, 10);
      }
    }
  }

  //vistor까지 포함시켜서 점수를 합산!
  for (visitor of visitors) {
    if (!map.has(visitor)) {
      map.set(visitor, 1);
    } else if (map.has(visitor)) {
      if (map.get(visitor) > 0) map.set(visitor, map.get(visitor) + 1);
    }
  }

  let reuslt = [...map].sort((a, b) => b[1] - a[1]);

  for (let [userName, score] of reuslt) {
    if (score > 0) answer.push(userName);
  }

  return answer;
}

module.exports = problem7;

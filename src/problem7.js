function problem7(user, friends, visitors) {
  // friends를 순회하여 user의 친구를 배열에 담는다.
  const userFriends = [];

  friends.forEach((friend) => {
    const [a, b] = friend;
    if (a === user && !userFriends.includes(b)) {
      userFriends.push(b);
      return;
    }
    if (b === user && !userFriends.includes(a)) {
      userFriends.push(a);
    }
  });

  // friends를 순회하여 scores 객체에 친구의 이름과 점수를 담는다. 이미 있다면 +10점, 없다면 새로 만들어 10점을 준다.
  const scores = {};

  friends.forEach((friend) => {
    const [a, b] = friend;
    // a, b 중 user의 친구가 아니라면 제외
    if (userFriends.includes(a) || userFriends.includes(b)) {
      if (a in scores) {
        scores[a] += 10;
      } else {
        scores[a] = 10;
      }
      if (b in scores) {
        scores[b] += 10;
      } else {
        scores[b] = 10;
      }
    }
  });

  // visitors를 순회하여 scores 객체에 친구의 이름과 점수를 담는다. 이미 있다면 +1점, 없다면 새로 만들어 1점을 준다.
  visitors.forEach((visitor) => {
    if (visitor in scores) {
      scores[visitor] += 1;
    } else {
      scores[visitor] = 1;
    }
  });

  // scores를 배열로 만들어 점수 기준 오름차순으로 정렬한다.
  // 점수가 0점의 경우 추천하지 않는다.
  let scoresArray = Object.entries(scores);
  scoresArray = scoresArray.filter(([name, score]) => score !== 0).sort((a, b) => b[1] - a[1]);

  // 정렬한 scores를 순회하며 반환할 배열에 조건에 맞게 푸쉬한다. (user와 이미 친구이거나, result의 길이가 5에 도달했을 때, user 본인일 때 푸쉬하지 않는다.)
  const result = [];

  scoresArray.forEach((element) => {
    const name = element[0];

    // user와 이미 친구라면, 친구 추천할 사람이 5명이 넘은 경우, user 본인인 경우를 제외한다.
    if (!userFriends.includes(name) && result.length <= 5 && name !== user) {
      result.push(name);
    }
  });

  return result;
}

module.exports = problem7;

function problem7(user, friends, visitors) {
  let answer;

  let withFriends = new Map();
  let scores = new Map();
  //연산
  //user-[friends]로 key-value hashmap 형성
  for (let [a, b] of friends) {
    if (withFriends.has(a)) {
      withFriends.get(a).push(b);
    } else if (!withFriends.has(a)) {
      withFriends.set(a, [b]);
    }
    if (withFriends.has(b)) {
      withFriends.get(b).push(a);
    } else if (!withFriends.has(b)) {
      withFriends.set(b, [a]);
    }
  }
  //기능목록 1-1 구현
  let check = withFriends.get(user);
  for (let [key] of withFriends) {
    if (key === user) continue;
    scores.set(key, 0);
    withFriends.get(key).forEach((v) => {
      if (check.includes(v)) {
        if (scores.has(key)) scores.set(key, scores.get(key) + 10);
      }
    });
  }
  //기능목록 1-2 구현
  for (let name of visitors) {
    if (scores.has(name)) {
      scores.set(name, scores.get(name) + 1);
    } else scores.set(name, 1);
  }

  return answer;
}

module.exports = problem7;

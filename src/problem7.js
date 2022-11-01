function problem7(user, friends, visitors) {
  let withFriends = new Map();
  let scores = new Map();
  //연산
  //user-[friends]로 key-value hashmap 형성
  for (let [p1, p2] of friends) {
    withFriends.set(p1, []);
    withFriends.set(p2, []);
    scores.set(p1, 0);
    scores.set(p2, 0);
  }

  for (let [p1, p2] of friends) {
    withFriends.get(p1).push(p2);
    withFriends.get(p2).push(p1);
  }

  //기능목록 1-1 구현
  const users = withFriends.get(user);
  for (let [key] of withFriends) {
    if (key === user) continue;
    withFriends.get(key).forEach(v => {
      if (users.includes(v)) {
        scores.set(key, scores.get(key) + 10);
      }
    });
  }
  //기능목록 1-2 구현
  for (let name of visitors) {
    if (withFriends.get(user).includes(name)) continue;
    if (scores.has(name)) {
      scores.set(name, scores.get(name) + 1);
    } else {
      scores.set(name, 1);
    }
  }

  //출력값 구하기
  const scoreArray = [...scores];
  //기능목록 2-2 구현
  scoreArray.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].charCodeAt() - b[0].charCodeAt();
    }
    return b[1] - a[1];
  });
  //기능목록 2-1 구현
  let answer = [];
  for (let i = 0; i < 5; i += 1) {
    if (scoreArray[i] !== undefined && scoreArray[i][1] !== 0) {
      answer.push(scoreArray[i][0]);
    }
  }

  return answer;
}

module.exports = problem7;

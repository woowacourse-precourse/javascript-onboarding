function problem7(user, friends, visitors) {
  let fdList = new Map();
  let scores = new Map();

  for (let [p1, p2] of friends) {
    fdList.get(p1) ? fdList.get(p1).push(p2) : fdList.set(p1, [p2]);
    fdList.get(p2) ? fdList.get(p2).push(p1) : fdList.set(p2, [p1]);
    scores.set(p1, 0);
    scores.set(p2, 0);
  }

  //기능목록 1-1 구현
  const users = fdList.get(user);
  for (let [key] of fdList) {
    if (key === user) continue;
    fdList.get(key).forEach(v => {
      if (users.includes(v)) {
        scores.set(key, scores.get(key) + 10);
      }
    });
  }

  //기능목록 1-2 구현
  for (let name of visitors) {
    if (fdList.get(user).includes(name)) continue;
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
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] === b[0]) {
        return 0;
      }
      if (a[0] > b[0]) {
        return 1;
      }
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

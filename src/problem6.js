function problem6(forms) {
  let answer;
  answer = new Set();
  compareId = new Map();

  for (let userInfo of forms) {
    for (let i = 0; i < userInfo[1].length - 1; i ++) {
      {
        id = userInfo[1].slice(i, i+2);
        if (compareId.has(id)) {
          answer.add(compareId.get(id))
          answer.add(userInfo[0])
        } else {
          compareId.set(id, userInfo[0])
        }
      }
     
    }
  }
  answer = Array.from(answer);
  answer.sort();
  return answer;
}

module.exports = problem6;

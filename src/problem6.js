function problem6(forms) {
  var answer = [];
  const map = new Map();
  for (let person of forms) {
    // person[1]은 그 사람의 닉네임, 중복될 수 있는 문자열은 20개 미만
    for (let i = 0; i < person[1].length - 1; i++) {
      const str = person[1][i] + person[1][i + 1];
      if (map.has(str)) {
        answer.push(person[0]);
        answer.push(map.get(str));
      }
    }
    for (let i = 0; i < person[1].length - 1; i++) {
      const str = person[1][i] + person[1][i + 1];
      const email = person[0];
      map.set(str, email);
    }
  }
  // answer는 중복이 있을 수 있으므로 중복을 제거해준다.
  return [...new Set(answer)].sort();
}

module.exports = problem6;

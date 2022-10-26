function problem2(cryptogram) {
  let answer = cryptogram;
  let duplicated = false;
  while (true) {
    duplicated = false;
    let n = answer.length;
    let res = "";
    for (let i = 0; i < n; i++) {
      if (answer[i] == answer[i + 1]) {
        duplicated = true;
        let cnt = 0;
        while (answer[i] == answer[i + cnt]) cnt++;
        i += cnt - 1;
      } else res += answer[i];
    }
    answer = res;
    if (!duplicated) break;
  }
  return answer;
}
module.exports = problem2;

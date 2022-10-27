function problem2(cryptogram) {
  var answer;
  var cryptogramString = cryptogram;
  var bundle = 0;
  var flag = 1;
  function DFS(i) {
    if (i == cryptogramString.length - 1) return;
    if (cryptogramString[i] != cryptogramString[i + 1]) {
      if (bundle == 0) {
        answer += cryptogramString[i];
      } else bundle = 0;
      if (i == cryptogramString.length - 2) answer += cryptogramString[i + 1];
    } else {
      flag++;
      bundle++;
    }
    DFS(i + 1);
  }
  while (cryptogramString.length > 1 && flag > 0) {
    flag = 0;
    answer = "";
    DFS(0);
    cryptogramString = answer;
  }
  return answer;
}

module.exports = problem2;

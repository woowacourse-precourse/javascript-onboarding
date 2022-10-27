function problem2(cryptogram) {
  var answer;
  var cryptogramString = cryptogram;
  var bundle = 0;
  var flag = 1;
  while (cryptogramString.length > 1 && flag > 0) {
    answer = "";
    flag = 0;
    for (let i = 0; i < cryptogramString.length - 1; i++) {
      if (cryptogramString[i] == cryptogramString[i + 1]) {
        flag++;
        bundle++;
      } else {
        if (bundle == 0) answer += cryptogramString[i];
        else bundle = 0;
        if (i == cryptogramString.length - 2) answer += cryptogramString[i + 1];
      }
    }
    cryptogramString = answer;
  }
  return answer;
}

module.exports = problem2;

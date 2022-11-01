function problem2(cryptogram) {
  var answer;
  var cryptogramString = cryptogram;
  var bundle = 0;
  var flag = 1;

  function decode(i) {
    if (i == cryptogramString.length - 1) return;
    else {
      if (cryptogramString[i] == cryptogramString[i + 1]) {
        flag++;
        bundle++;
      } else {
        if (bundle > 0) bundle = 0;
        else answer += cryptogramString[i];
        if (i == cryptogramString.length - 2) answer += cryptogramString[i + 1];
      }
      decode(i + 1);
    }
  }

  while (cryptogramString.length > 1 && flag > 0) {
    answer = "";
    flag = 0;
    decode(0);
    cryptogramString = answer;
  }

  return answer;
}

module.exports = problem2;

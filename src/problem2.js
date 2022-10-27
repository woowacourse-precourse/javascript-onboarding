function problem2(cryptogram) {
  var answer;
  var cryptogramString = cryptogram;
  var bundle = 1;
  var flag = 1;

  function DFS(nowPlace, checkingIndex) {
    if (
      cryptogramString[checkingIndex] != cryptogramString[checkingIndex + 1]
    ) {
      if (bundle > 1) {
        nowPlace = checkingIndex;
        bundle = 1;
      } else {
        answer += cryptogramString[checkingIndex];
      }
      if (checkingIndex == cryptogramString.length - 2)
        answer += cryptogramString[checkingIndex + 1];
      return nowPlace;
    } else {
      flag++;
      bundle++;
      if (checkingIndex !== cryptogramString.length - 2)
        nowPlace = DFS(nowPlace, checkingIndex + 1);
      return nowPlace;
    }
  }

  while (cryptogramString.length >= 2 && flag > 0) {
    answer = "";
    flag = 0;
    for (var i = 0; i <= cryptogramString.length - 2; i++) {
      i = DFS(i, i);
    }
    cryptogramString = answer;
  }
  return answer;
}

module.exports = problem2;

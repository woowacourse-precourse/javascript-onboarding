// 기능정의
// 1. 오류검사
//    ㄴ a. 길이 1 <= n <= 1000
//    ㄴ b. 소문자만 된다.
// 2. 중복 제거

function problem2(cryptogram) {
  var answer;
  var cryptogramArr = [...cryptogram];
  var charLen = cryptogram.length;
  var stop = 1;

  if (1 <= charLen <= 1000 && cryptogram == cryptogram.toLowerCase()) {
    while (stop == 1) {
      stop = 0;
      for (var i = 0; i < cryptogramArr.length - 1; i++) {
        if (cryptogramArr[i] === cryptogramArr[i + 1]) {
          cryptogramArr.splice(i, 2);
          stop = 1;
          break;
        }
      }
    }

    answer = cryptogramArr.join("");
  } else {
    return "error";
  }

  return answer;
}

module.exports = problem2;

function problem2(cryptogram) {
  var answer;
  var arr = [];

  // * 암호문이 1이상 1000이하고, 소문자일 때
  if (
    cryptogram.length >= 1 &&
    cryptogram.length <= 1000 &&
    cryptogram.toLowerCase()
  ) {
    for (var i = 0; i < cryptogram.length; i++) {
      if (arr.length == 0) {
        // * 암호를 한글자씩 배열에 push
        arr.push(cryptogram[i]);
      } else {
        arr.push(cryptogram[i]);
        // * arr 배열에 넣은 후, 넣은 문자와 넣은 문자 앞의 문자가 같으면
        if (arr[arr.length - 1] === arr[arr.length - 2]) {
          // * arr 배열에서 두 번 pop
          arr.pop();
          arr.pop();
        }
      }
    }
  }
  answer = arr.join("");
  return answer;
}

module.exports = problem2;

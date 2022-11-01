function problem2(cryptogram) {
  var result = cryptogram;
  while (/(.)\1/.test(result)) {
    check(result);
  }
  //연속되는 글자를 word에 재할당 해주는 함수
  function check(checkword) {
    result = "";
    if (/(.)\1/.test(checkword)) {
      let checked = checkword.replace(/(.)\1/, "");
      result = checked;
    } else {
      result = checkword;
    }
  }
  var answer = result;
  return answer;
}

module.exports = problem2;

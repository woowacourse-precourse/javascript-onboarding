function problem2(cryptogram) {
  var answer = consecutiveWord;
  while (/(.)\1/.test(answer)) {
    check(answer);
  }
  //연속되는 글자를 word에 재할당 해주는 함수
  function check(checkword) {
    answer = "";
    if (/(.)\1/.test(checkword)) {
      let checked = checkword.replace(/(.)\1/, "");
      answer = checked;
    } else {
      answer = checkword;
    }
  }
  return answer;
}

module.exports = problem2;

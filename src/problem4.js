function problem4(word) {

  if (invaild(word)) {
    return false;
  }

  var answer = "";

  var alphabet1 = "abcdefghijklmnopqrstuvwxyz".split("");
  var alphabet2 = [...alphabet1].reverse();

  var wordArr = word.split("");

  for (var i = 0 ; i < word.length ; i++) {
    var char = word.charAt(i);

    // 영문이 아닌 경우 분기처리
    var eng = /[a-zA-Z]/;
    if (eng.test(char)) {
      var isUpper = char === char.toUpperCase();
      var index = alphabet1.indexOf(char.toLowerCase());
      var reverseChar = alphabet2[index];

      //기존이 대문자인 경우 다시 대문자로 변경(알파벳이 소문자로)
      if (isUpper) {
        reverseChar = reverseChar.toUpperCase();
      }
      answer += reverseChar;
    } else {
      answer += char;
    }
  }
  return answer;
}

// 들어온 변수가 길이가 맞는지 확인하는 함수
function invaild(word) {
  if (word.length < 1 || word.length > 1000) {
    return true;
  }
  return false;
}

module.exports = problem4;

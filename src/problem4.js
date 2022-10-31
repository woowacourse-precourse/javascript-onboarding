/** 인자로 들어온 알파벳의 순서를 바꿔주는 기능 **/
function reversAlphabet(input) {
  var isAlphabet = /[a-zA-Z]/;
  var isBigAlphabet = /[A-Z]/;

  if (isAlphabet.test(input)) {
    charCode = input.charCodeAt(0);
    var numberOfAlphabet = isBigAlphabet.test(input)
      ? 65 - charCode
      : 97 - charCode;

    charCode = charCode + (25 - 2 * numberOfAlphabet);
    input = String.fromCharCode(charCode);

    return input;
  }
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;

/** 인자로 들어온 알파벳의 순서를 바꿔주는 기능 **/
function reversAlphabet(input) {
  let isAlphabet = /[a-zA-Z]/;
  let isBigAlphabet = /[A-Z]/;

  if (isAlphabet.test(input)) {
    charCode = input.charCodeAt(0);
    let numberOfAlphabet = isBigAlphabet.test(input)
      ? charCode - 65
      : charCode - 97;

    charCode = charCode + (25 - 2 * numberOfAlphabet);
    input = String.fromCharCode(charCode);
  }
  return input;
}

function problem4(word) {
  var answer;
  word = word.split("");

  for (let i = 0; i < word.length; i++) {
    word[i] = reversAlphabet(word[i]);
  }

  console.log(word);
  answer = word.join("");
  return answer;
}

module.exports = problem4;

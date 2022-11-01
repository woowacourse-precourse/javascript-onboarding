// 기능 목록
// 1. 대소문자 체크 및 알파벳 체크 함수 구현
// 2. 입력받은 대소문자에 따른 알파벳 배열 생성 함수 구현
// 3. 1,2의 함수로 청개구리 사전의 반대쪽 알파벳의 반환하는 함수 구현
// 4. 입력받은 word에 맞는 문자열 출력하도록 구현

function checkAlpha(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function checkLower(alphabet) {
  if (alphabet === alphabet.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function genAlphaArr(isLower) {
  if (isLower) {
    return Array.from({ length: 26 }, (v, idx) =>
      String.fromCharCode(idx + 97)
    );
  }
  return Array.from({ length: 26 }, (v, idx) => String.fromCharCode(idx + 65));
}

function onReverse(char) {
  const isalpha = checkAlpha(char);

  if (!isalpha) {
    return char;
  }
  const isLower = checkLower(char);

  const alphaArr = genAlphaArr(isLower);

  const idx = alphaArr.indexOf(char);

  const reverseAlpha = alphaArr[alphaArr.length - (idx + 1)];

  return reverseAlpha;
}

function problem4(word) {
  var answer;

  const arr_word = word.split("");
  arr_answer = arr_word.map((char) => onReverse(char));
  answer = arr_answer.join("");

  return answer;
}

module.exports = problem4;

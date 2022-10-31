function problem4(word) {
  var answer;
  if (!validType) throw new Error("잘못된 타입입니다.");
  if (!validRange) throw new Error("잘못된 범위입니다.");
  if (!validWord) throw new Error("잘못된 형식입니다.");

  answer = checkLetter(word);
  return answer;
}


// 정답과 관련된 메소드
/**
 * 문자열을 변환하는 메소드
 * @param {string} word 변환하고자 하는 word
 * @returns {string} 변환된 문자열
 */
function checkLetter(word) {
  const reversedArray = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") {
      reversedArray.push(" ");
    }
    else
      reversedArray.push(reverseLetter(word[i]));
  }

  return reversedArray.join("");
}


// 문자 변환과 관련된 메소드
/**
 * 알파벳을 반대로 변환하는 메소드
 * @param {string} letter 공백이 아닌 문자
 * @returns {string} 변환된 문자
 */
function reverseLetter(letter) {
  const letterASCII = letter.charCodeAt();
  if (97 <= letterASCII && letterASCII <= 122) return reverseLower(letter);
  if (65 <= letterASCII && letterASCII <= 90) return reverseUpper(letter);
  return letter;
}
/**
 * 소문자를 변환하는 메소드
 * @param {string} letter 변환 대상 소문자
 * @returns {string} 변환된 소문자
 */
function reverseLower(letter) {
  // 영어 소문자 ASCII : 97 ~ 122
  const index = 97 - letter.charCodeAt();
  return String.fromCharCode(122 + index);
}
/**
 * 대문자를 변환하는 메소드
 * @param {string} letter 변환 대상 대문자
 * @returns {string} 변환된 대문자
 */
function reverseUpper(letter) {
  // 영어 대문자 ASCII 65 ~ 90
  const index = 65 - letter.charCodeAt();
  return String.fromCharCode(90 + index);
}


// 예외 처리
function validRange(word) {
  return 1 <= word.length && word.length <= 1000;
}

function validWord(word) {
  const reg = /^[a-zA-Z\s]*$/

  return reg.test(word);
}

function validType(word) {
  return typeof (word) == "string";
}

module.exports = problem4;

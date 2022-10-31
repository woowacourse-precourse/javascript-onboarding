function problem4(word) {
  var answer;
  if (!validType) throw new Error("잘못된 타입입니다.");
  if (!validRange) throw new Error("잘못된 범위입니다.");
  if (!validLetters) throw new Error("잘못된 형식입니다.");

  answer = checkLetter(word);
  return answer;
}


// 정답을 return 하는 메소드 (공백인 경우, 그대로 정답 배열에 추가)
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


// 알파벳을 반대로 변환하는 메소드 (알파벳이 아닌 경우 변환하지 않는다)
function reverseLetter(letter) {
  const letterASCII = letter.charCodeAt();
  if (97 <= letterASCII && letterASCII <= 122) return reverseLower(letter);
  if (65 <= letterASCII && letterASCII <= 90) return reverseUpper(letter);
  return letter;
}

function reverseLower(letter) {
  // 영어 소문자 ASCII : 97 ~ 122
  const index = 97 - letter.charCodeAt();
  return String.fromCharCode(122 + index);
}

function reverseUpper(letter) {
  // 영어 대문자 ASCII 65 ~ 90
  const index = 65 - letter.charCodeAt();
  return String.fromCharCode(90 + index);
}


// 예외 처리
function validRange(word) {
  return 1 <= word.length && word.length <= 1000;
}

function validLetters(word) {
  const reg = /^[a-zA-Z\s]*$/

  return reg.test(word);
}

function validType(word) {
  return typeof (word) == "string";
}

module.exports = problem4;

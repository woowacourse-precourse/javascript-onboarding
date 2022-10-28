function problem4(word) {
  var answer;
  answer = reverse(word);
  return answer;
}

module.exports = problem4;

//코드값 처리를 위한 상수 선언
const ASCII_UPPER_MAX = 155;
const ASCII_LOW_MAX = 219;
const ASCII_CODE_UPPER_MAX = 91;
const ASCII_CODE_UPPER_LOW = 64;
const ASCII_CODE_LOW_MIN = 96;
const ASCII_CODE_LOW_MAX = 123;

//문자를 배열로 반환하는 함수
function stringToArray(word) {
  return word.split("");
}

//배열을 받으면 배열안의 아스키코드값 에따라 새로운 배열을 생성
function evalueAscii(arr) {
  let reverseArr = [];

  arr.map((char) => {
    const newChar = changeWord(char);
    reverseArr.push(newChar);
  });

  return reverseArr;
}

//문자를 하나 받으면 아스키 코드값에 따라 새로운 문자 반환
function changeWord(char) {
  if (
    char.charCodeAt(0) < ASCII_CODE_UPPER_MAX &&
    char.charCodeAt(0) > ASCII_CODE_UPPER_LOW
  ) {
    return String.fromCharCode(ASCII_UPPER_MAX - char.charCodeAt(0));
  }
  if (
    char.charCodeAt(0) > ASCII_CODE_LOW_MIN &&
    char.charCodeAt(0) < ASCII_CODE_LOW_MAX
  ) {
    return String.fromCharCode(ASCII_LOW_MAX - char.charCodeAt(0));
  } else return char;
}

function reverse(word) {
  if (!vaildate(word)) alert("워드길이");
  const arr = stringToArray(word);
  const reverseArr = evalueAscii(arr);
  const reverseWord = reverseArr.join("");
  return reverseWord;
}

function vaildate(word) {
  if (typeof word !== "string") return false;
  else if (word.length < 1 || word.length > 1000) return false;
  else return true;
}

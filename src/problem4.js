function problem4(word) {
  let answer;

  answer = word.replace(/[a-z|A-Z]/g, (char) => {
    return getGreenFrogWord(char);
  });

  return answer;
}

// A-Z 아스키 코드 -> 65 ~ 90
// a-z 아스키 코드 -> 97 ~ 122

// 97이상이면 소문자 처리, 이하면 대문자 처리
// 대문자 처리: "155 - 현재 아스키 코드" 한 값을 문자로 변환하여 리턴
// 소문자 처리: "219 - 현재 아스키 코드" 한 값을 문자로 변환하여 리턴
function getGreenFrogWord(char) {
  let ASCII = char.charCodeAt(0);

  if (ASCII >= 97) {
    // 소문자 처리
    ASCII = 219 - ASCII;
    return String.fromCharCode(ASCII);
  } else {
    // 대문자 처리
    ASCII = 155 - ASCII;
    return String.fromCharCode(ASCII);
  }
}

module.exports = problem4;

// 입력값 : 문자열

// 구현할 기능
// 문자를 하나 입력받아 해당 문자를 청개구리 표에 맞는 문자로 바꿔 반환하는 함수

// 입력받은 문자열에 replace 함수와 정규표현식을 이용하여 청개구리 문자로 바꾼다.
// 이때 replace에 콜백함수로 청개구리 함수를 전달해주어 문자를 하나하나 변경한다.

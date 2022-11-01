function problem4(word) {
  // 글자수 예외처리
  if(errorHandler(word))  return null;

  var answer;
  // 아스키코드 변환 함수 호출
  answer = wordToAscii(word);

  return answer;
}

function errorHandler(param) {
  // param이 숫자일 경우
  if (!!Number(param)) return "Error";
  // param이 문자일 경우
  else{
    // 1000의 자리를 넘을 경우 예외처리
    if (param.length > 1000) return true;
  }

  return false;
}

// 아스키코드 변환 함수
function wordToAscii(word) {
  // 아스키코드를 담을 변수
  result = '';

  for(i=0; i<word.length; i++) {
    // 띄워쓰기일 경우 띄워쓰기를 저장
    if (word[i] == " ") result += " ";
    else{
      // 아스키코드로 변환
      var temp = word.charCodeAt(i);
      // 알파벳 예외처리
      if (isNaN(reverseAscii(temp))) {
        return "Error : 알파벳이 아닌 문자를 입력하셨습니다."
      }

      // 변환된 아스키코드를 문자로 변환
      temp = String.fromCharCode(reverseAscii(temp));
      // 문장 작성
      result += temp;
    }
  }

  return result;
}

// 청개구리 사전 함수
function reverseAscii(num) {
  // 소문자의 합
  const lowerCase = 97 + 122;
  // 대문자의 합
  const upperCase = 65 + 90;
  // 변환된 값을 담을 변수;
  var result = 0;

  // 대문자일 경우
  if (num >= 65 && num <= 90) {
    result = upperCase - num;
  }
  // 소문자일 경우
  else if (num >= 97 && num <= 122){
    result = lowerCase - num;
  }
  // 알파벳이 아닌 경우 예외처리
  else  return errorHandler(num);

  return result;
}

module.exports = problem4;

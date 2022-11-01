function problem4(word) {
  var answer;
  return answer;
}

function errorHandler(param) {
  // param이 숫자일 경우
  if (isNum(param)) {
    // 아스키코드가 알파벳의 범위에 포함되지 않을 경우 예외처리
    if (!(65 <= param <= 90) | !(97 <= param <= 122)){
      return true;
    }
  // param이 문자일 경우
  }else{
    // 1000의 자리를 넘을 경우 예외처리
    if (param.length > 1000) return true;
  }

  return false;
}

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
      if (errorHandler(temp)) {
        return "Error : 알파벳이 아닌 문자를 입력하셨습니다."
      }
      
      result += temp;
    }
  }
}

module.exports = problem4;

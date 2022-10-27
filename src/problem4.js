// 기능 목록
// 1. 문자열을 순회하여 아스키코드를 확인하는 기능
// 2. 아스키 코드를 통해 문자 상태를 판단하는 기능
// 3. 소문자를 반대로 변환하는 기능
// 4. 대문자를 반대로 변환하는 기능

// 알파벳 대문자를 반대로 변환
function upperConversion(code){
  const conversion_code = (90 - code) + 65;
  return String.fromCharCode(conversion_code);
}

// 알파벳 소문자를 반대로 변환
function lowerConversion(code){
  // 코드를 반대의 문자 코드로 변환하여 문자로 변환 후 반환
  const conversion_code = (122 - code) + 97;
  return String.fromCharCode(conversion_code);
}

// 아키스 코드를 통해 문자 상태를 반환하는 함수
function checkWordState(code){
  // 대문자, 소문자, 그 외 상태를 판단하여 반환
  if(code > 64 && code < 91) return 'capital';
  if(code > 96 && code < 123) return 'small';
  return false;
}

// 문자열을 순회하여 아스키 코드로 변환
function circuitWord(word){
  // 결과 문자열을 담을 변수
  let result_word = '';

  // 문자열을 순회하여 아스키 코드로 변환
  for(let i = 0; i < word.length; i++){
    const char_code = word.charCodeAt(i);
    // 아스키 코드로 어떤 문자인지 판단
    const word_state = checkWordState(char_code);
    // 변환할 문자를 담을 변수
    let conversion_word;

    // 문자에 따라 반대로 변환
    if(word_state === 'capital'){
      conversion_word = upperConversion(char_code);
    }
    else if(word_state === 'small'){
      conversion_word = lowerConversion(char_code);
    }
    // 예외처리
    else conversion_word = word[i];

    result_word += conversion_word;
  }
  return result_word;
}

function problem4(word) {
  // 결과값을 answer에 저장
  const answer = circuitWord(word);
  return answer;
}

module.exports = problem4;

/*
  기능 목록
  1. 현재 문자열에 연속하는 중복문자가 있는 지 확인한다.
  2. 연속하는 중복문자가 있으면 중복문자를 제거한다.
  3. 제거후 반환한 문자열을 다시 1번부터 반복한다.
  4. 연속하는 중복문자가 없으면 문자열을 반환한다.
*/ 
function problem2(cryptogram) {
  var answer;
  answer = cryptogram;
  while (isDuplicate(answer)) {
    answer = decodeCryptogram(answer);
  }

  return answer;
}

function isDuplicate(input) {
  // 연속으로 중복된 문자가 있는지 확인하는 함수
  for (i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      return true;
    }
  }
  return false;
}

function decodeCryptogram(cryptogram) {
  // 암호문을 해독하는 함수
  var curr = "";
  var decodedWord = "";
  for (let i = 0; i < cryptogram.length; i++) {
    curr = cryptogram[i];
    if ( curr === cryptogram[i-1] || curr === cryptogram[i+1] ) {
      continue
    } else {
      decodedWord += curr; // 중복되지 않는 문자는 decodedWord에 추가하여 반환
    }
  }
  return decodedWord;
}


module.exports = problem2;

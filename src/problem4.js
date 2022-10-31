function problem4(word) {
  var answer;
  let reverseWord = '';

  for(let i = 0; i < word.length; i++) {
    let charAsc = word.charCodeAt(i);
    let upperCaseStart = 65;
    let upperCaseEnd = 90;
    let upperCaseTotal = upperCaseStart + upperCaseEnd;
    let lowerCaseStart = 97;
    let lowerCaseEnd = 122;
    let lowerCaseTotal = lowerCaseStart + lowerCaseEnd;
    let space = ' ';

    if(charAsc >= upperCaseStart && charAsc <= upperCaseEnd) {
      reverseWord += String.fromCharCode(upperCaseTotal-charAsc);
    }
    else if(charAsc >= lowerCaseStart && charAsc <= lowerCaseEnd) {
      reverseWord += String.fromCharCode(lowerCaseTotal-charAsc);
    } 
    else if(word[i] === space) {
      reverseWord += space;
    } 
    else {
      continue;
    }
  }
  answer = reverseWord;

  return answer;
}

module.exports = problem4;

// 1. 문자를 아스키코드로 변환하여 조건문을 통해 대문자, 소문자 판단
// 2. 기존 문자의 아스키코드를 청개구리 사전의 문자 아스키코드로 변환한 후 문자로 반환
// 3. 문자가 공백인 경우, 문자 이외의 값인 경우 조건문 추가
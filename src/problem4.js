// 아스키코드 범위 값을 위한 상수
const CAPITAL_LETTER_ASCII = [65, 90];
const SMAPP_LETTER_ASCII = [97, 122];

// 청개구리 사전의 반환값 구하기
function problem4(word) {
  const wordArr = word.split('');
  // 입력받은 단어를 배열화하여 순회
  wordArr.map((str, idx) => {
    // 현재 검사하는 단어의 아스키코드 가져오기
    const ascii = str.charCodeAt(0);
    // 아스키코드 값이 대문자 범위일 때
    if(ascii >= CAPITAL_LETTER_ASCII[0] && ascii <= CAPITAL_LETTER_ASCII[1]) {
      wordArr[idx] = String.fromCodePoint((CAPITAL_LETTER_ASCII[0] + CAPITAL_LETTER_ASCII[1]) - ascii);
    }
    // 아스키코드 값이 소문자 범위일 때 
    else if(ascii >= SMAPP_LETTER_ASCII[0] && ascii <= SMAPP_LETTER_ASCII[1]) {
      wordArr[idx] = String.fromCodePoint((SMAPP_LETTER_ASCII[0] + SMAPP_LETTER_ASCII[1])  - ascii);
    }
  })
  return wordArr.join('');
}

module.exports = problem4;

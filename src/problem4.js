// 아스키코드 범위 값을 위한 상수
const CAPITAL_LETTER_ASCII = [65, 90];
const SMAPP_LETTER_ASCII = [97, 122];

// 청개구리 사전의 반환값 구하기
function problem4(word) {
  const wordArr = word.split('');
  wordArr.map((str, idx) => {
    const ascii = str.charCodeAt(0);
    if(ascii >= CAPITAL_LETTER_ASCII[0] && ascii <= CAPITAL_LETTER_ASCII[1]) {
      wordArr[idx] = String.fromCodePoint((CAPITAL_LETTER_ASCII[0] + CAPITAL_LETTER_ASCII[1]) - ascii);
    }
    else if(ascii >= SMAPP_LETTER_ASCII[0] && ascii <= SMAPP_LETTER_ASCII[1]) {
      wordArr[idx] = String.fromCodePoint((SMAPP_LETTER_ASCII[0] + SMAPP_LETTER_ASCII[1])  - ascii);
    }
  })
  return wordArr.join('');
}

module.exports = problem4;

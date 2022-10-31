// [✅] 청개구리 사전의 원본(대문자) 입력하기, 소문자 사전 만들기
// [✅] 청개구리 사전의 reverse 사전 만들기 -> 스프레드
// [] word -> arr로 변환 후 각 index가 아스키 코드 기준 범위에 있는 값이면 변경 / 아스키 코드 65 ~ 90 (대문자), 97 ~ 122 (소문자)
// [] word[i]에 해당하는 알파벳이 대문자일 경우, dictionaryUpper.indexOf(word[i])를 통해 index 찾기
// [] wordArr[i]의 값을 dictionaryUpperReverse[idx]의 값으로 변경
// [] word[i]에 해당하는 알파벳이 소문자일 경우, dictionaryLower.indexOf(word[i])를 통해 index 찾기
// [] wordArr[i]의 값을 dictionaryLowerReverse[idx]의 값으로 변경
// [] 알파벳을 제외한 이외의 문자는 변환 X (띄어쓰기, 한글 등)

function problem4(word) {
  const wordArr = word.split('');
  const dictionaryUpper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const dictionaryUpperReverse = [...dictionaryUpper].reverse();
  const dictionaryLower = dictionaryUpper.map((alphabet) =>
    alphabet.toLowerCase()
  );
  const dictionaryLowerReverse = [...dictionaryLower].reverse();

  return wordArr;
}

console.log(problem4('I love you'));

module.exports = problem4;

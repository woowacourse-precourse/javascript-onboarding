/**
 * param으로 들어온 문자가 알파벳인지 확인한다.
 * @param {string} char - 변환해야할 문자
 * @return {boolean}
 */
const isAlphabet = (char) => {
  return /^[A-Z]$/i.test(char);
};

/**
 * 아스키코드로부터 변환한 문자를 반환한다.
 * @param {number} charCode - 아스키코드
 * @return {string}
 */
const getCharFromAsciiCode = (charCode) => {
  return String.fromCharCode(charCode);
};

/**
 * 문자로부터 변환한 아스키코드를 반환한다.
 * @param {string} char - 문자
 * @return {number}
 */
const getAsciiCodeFromChar = (char) => {
  return char.charCodeAt(0);
};

/**
 * 반대로 전환된 청개구리 사전을 반환한다.
 * @return {Map<string, string>}
 */
const getReversedAlphabetMap = () => {
  const reversedAlphabetMap = new Map();

  const smallAAscii = getAsciiCodeFromChar("a");
  const smallZAscii = getAsciiCodeFromChar("z");
  const bigAAscii = getAsciiCodeFromChar("A");
  const bigZAscii = getAsciiCodeFromChar("Z");

  for (let i = 0; i <= 25; i++) {
    reversedAlphabetMap.set(
      getCharFromAsciiCode(smallAAscii + i),
      getCharFromAsciiCode(smallZAscii - i)
    );
    reversedAlphabetMap.set(
      getCharFromAsciiCode(bigAAscii + i),
      getCharFromAsciiCode(bigZAscii - i)
    );
  }

  return reversedAlphabetMap;
};

/**
 * 메인 함수
 * @param {string} word
 * @return {string}
 */
const problem4 = (word) => {
  const reversedAlphabetMap = getReversedAlphabetMap();
  let answer = "";

  for (let singleChar of word) {
    if (isAlphabet(singleChar)) {
      answer += reversedAlphabetMap.get(singleChar);
      continue;
    }

    answer += singleChar;
  }

  return answer;
};

module.exports = problem4;

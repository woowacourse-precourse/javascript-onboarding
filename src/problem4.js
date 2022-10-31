/**
 * 엄마의 말을 청개구리 말로 변환해서 반환하는 함수
 * @param {string} word 청개구리 엄마의 말
 * @returns {string} 청개구리의 말
 */
function problem4(word) {
  // 청개구리 사전을 만든다.
  const frogDictionary = makeFrogDictionary();

  // 청개구리 사전을 기반으로 엄마의 말을 청개구리 말로 변환한다.
  const frogLanguage = convertToFrogLanguage(word, frogDictionary);

  // 변환한 청개구리 말을 반환한다.
  return frogLanguage;
}

/**
 * 청개구리 사전을 만드는 함수
 * @returns {Object.<string, string>} 청개구리 사전
 */
function makeFrogDictionary() {
  // 각각 ASCII 넘버 65(A)와 97(a)를 시작으로 총 26개의 문자열을 갖는 배열을 두 개 만든다.
  const capitalLetters = makeLettersFromASCII(65, 26);
  const smallLetters = makeLettersFromASCII(97, 26);

  // 대문자와 소문자 각각의 반대로 변환된 하위 사전을 만든다.
  const capitalSubDictionary = makeSubDictionary(capitalLetters);
  const smallSubDictionary = makeSubDictionary(smallLetters);

  // 두 하위 사전을 하나의 사전으로 합쳐 청개구리 사전을 완성한다.
  const frogDictionary = { ...capitalSubDictionary, ...smallSubDictionary };

  // 청개구리 사전을 반환한다.
  return frogDictionary;
}

/**
 * 특정 ASCII를 시작으로 지정된 개수의 문자열을 만들어 반환하는 함수
 * @param {number} start 시작 ASCII코드
 * @param {number} count 시작점을 기준으로 만들 문자의 갯수
 * @returns {string[]} 문자열이 담긴 배열
 */
function makeLettersFromASCII(start, count) {
  return [...new Array(count)].map((_, i) => String.fromCharCode(i + start));
}

/**
 * 글자들을 반대로 변환하고 매핑해서 반환하는 함수
 * @param {string[]} letters 글자들
 * @returns {Object.<string, string> | {}} 반대로 매핑된 하위 사전
 */
function makeSubDictionary(letters) {
  // 하위 사전을 빈 객체로 초기화한다.
  const subDictionary = {};

  // 한 글자씩 순회하면서
  letters.forEach((letter, i) => {
    // 하위 사전에 해당 글자를 key로 반대편 글자를 value로 추가한다.
    subDictionary[letter] = letters[letters.length - i - 1];
  });

  // 하위 사전을 반환한다.
  return subDictionary;
}

/**
 * 청개구리 사전을 기반으로 변환해서 반환하는 함수
 * @param {string} word 청개구리 말로 변환할 말
 * @param {Object.<string, string>} frogDictionary 청개구리 사전
 * @returns {string} 청개구리 말로 변환된 말
 */
function convertToFrogLanguage(word, frogDictionary) {
  // 말을 한 글자씩 나눈다.
  const letters = word.split("");

  // 알파벳에 해당하는 정규표현식을 만든다.
  const regExpAlphabet = /[a-zA-Z]/;

  // 한 글자씩 순회하면서
  const frogLanguage = letters
    .map((letter) => {
      // 해당 글자가 알파벳인지 검사한다.
      const isAlphabet = regExpAlphabet.test(letter);
      // 알파벳이면 사전에서 참고해 변환시키고,
      // 아니라면 그대로 둔다.
      return isAlphabet ? frogDictionary[letter] : letter;
    })
    // 나눠진 글자들을 하나로 합친다.
    .join("");

  // 변환된 말을 반환한다.
  return frogLanguage;
}

module.exports = problem4;

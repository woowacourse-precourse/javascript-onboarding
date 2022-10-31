/*
  구현할 기능 목록
  [O] 1. 청개구리 사전을 생성 및 초기화하는 기능
  [O] 2. 해당 문자가 알파벳인지 확인하는 기능
  [ ] 3. 해당 문자가 대문자인지 확인하는 기능
  [ ] 4. 1~3의 기능을 이용하여 주어진 word를 이용하여 변환된 문자열을 반환하는 기능
*/

function problem4(word) {
  let result = '';
  const treeFrogDictionary = new Map();
  initDictionary(treeFrogDictionary);

  return result;
}

function initDictionary(dictionary) {
  const firstNum = 'A'.charCodeAt();
  const lastNum = 'Z'.charCodeAt();
  const sumNum = firstNum + lastNum;

  for (let i = firstNum; i <= lastNum; i++) {
    dictionary.set(String.fromCharCode(i), String.fromCharCode(sumNum - i));
  }
}

function isAlphabet(character) {
  return (
    ('A'.charCodeAt() <= character.charCodeAt() && 'Z'.charCodeAt() >= character.charCodeAt()) ||
    ('a'.charCodeAt() <= character.charCodeAt() && 'z'.charCodeAt() >= character.charCodeAt())
  );
}

module.exports = problem4;

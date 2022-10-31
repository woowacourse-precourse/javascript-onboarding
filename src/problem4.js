/*
  구현할 기능 목록
  [O] 1. 청개구리 사전을 생성 및 초기화하는 기능
  [O] 2. 해당 문자가 알파벳인지 확인하는 기능
  [O] 3. 해당 문자가 대문자인지 확인하는 기능
  [O] 4. 청개구리 사전을 이용하여 word를 청개구리 언어로 반환하는 기능
*/

function problem4(word) {
  let result = '';
  const treeFrogDictionary = new Map();
  initDictionary(treeFrogDictionary);

  for (let i = 0; i < word.length; i++) {
    if (!isAlphabet(word[i])) {
      result += word[i];
      continue;
    }

    if (isUpperCase(word[i])) {
      result += treeFrogDictionary.get(word[i]);
    } else {
      result += treeFrogDictionary.get(word[i].toUpperCase()).toLowerCase();
    }
  }

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

function isUpperCase(character) {
  return character.toUpperCase() === character;
}

module.exports = problem4;

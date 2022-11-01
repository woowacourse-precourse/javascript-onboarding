// @ts-check

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/**
 *
 * @param {string} word 길이가 1 이상 1,000 이하인 문자열
 * @returns {string} 청개구리 사전을 참고하여 반대로 변환된 문자열
 */

function problem4(word) {
  const characters = [...word];

  const convertedCharacters = characters.map((character) => {
    const foundIndex = alphabets.findIndex((alphabet) => {
      return alphabet === character.toLowerCase();
    });

    if (foundIndex === -1) {
      return character;
    }

    return isUpperCase(character)
      ? alphabets[alphabets.length - 1 - foundIndex].toUpperCase()
      : alphabets[alphabets.length - 1 - foundIndex];
  });

  return convertedCharacters.join("");
}

/**
 * alpha 가 대문자인지 체크
 * @param {string} alpha
 * @returns {boolean}
 */

function isUpperCase(alpha) {
  const upperRegex = /[A-Z]/g;

  return alpha.match(upperRegex) ? true : false;
}

module.exports = problem4;

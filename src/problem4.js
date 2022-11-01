const mother = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const son = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

/**
 *
 * @param {string} word
 * @returns
 */

function problem4(word) {
  if (word.length < 1) {
    return "";
  }

  const words = word.split(" ");
  const answer = [];

  for (let i = 0; i < words.length; i++) {
    let sonWord = "";
    for (let j = 0; j < words[i].length; j++) {
      if (isWords(words[i][j])) {
        const motherIndex = mother.indexOf(words[i][j].toUpperCase());

        if (isUpperCase(words[i][j])) {
          sonWord += son[motherIndex].toUpperCase();
        } else {
          sonWord += son[motherIndex];
        }
      } else {
        sonWord += words[i][j];
      }
    }
    answer.push(sonWord);
  }
  return answer.join(" ");
}

/**
 *
 * @param {string} input
 * @returns 주어진 문자가 영어 소문자 대문자에 해당하는지를 판단한다.
 */

function isWords(input) {
  const code = input.charCodeAt();
  if ((65 <= code && code <= 90) || (97 <= code && code <= 121)) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * @param {string} string
 * @returns 대문자인지 소문자인지 판단한다.
 */

function isUpperCase(string) {
  const upper = string.toUpperCase();

  if (string === upper) {
    return true;
  } else {
    return false;
  }
}

module.exports = problem4;

// 초기값을 만들어 놓고 그 초기값에 입력값들이 어느 인덱스인지 판단하여
// 변환하는 과정이 효율적이라 생각하여 함수를 만들었습니다.

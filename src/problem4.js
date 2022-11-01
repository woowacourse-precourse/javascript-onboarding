const problem4Util = require('./problem4Util');

function problem4(word) {
  var answer;
  const { changeChar } = problem4Util;

  try {
    // 범위를 벗어난다면 에러를 반환한다.
    if (word.length > 1000 || word.length < 1) {
      throw new Error('word length must be between(1, 1000)');
    }

    answer = word
      .split('')
      .map((char) => changeChar(char))
      .join('');
  } catch (e) {
    answer = -1;
  }
  return answer;
}

module.exports = problem4;

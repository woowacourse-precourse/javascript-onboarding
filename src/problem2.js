/**
 * 더이상 중복문자를 제거할 필요가 없는지 확인한다.
 * @param {string} cryptogram
 * @return {boolean}
 */
const isTaskFinished = (cryptogram) => {
  for (let i = 1; i <= cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i - 1]) return false;
  }

  return true;
};

/**
 * 문자열(cryptogram)을 받아 중복 문자를 제거한 문자열을 반환한다.
 * @param {string} str - 문자열(cryptogram)
 * @return {string}
 */
const getRedundantDeletedString = (str) => {
  const redundantStack = [];
  let lastDeletedChar = '';

  for (let i = 0; i < str.length; i++) {
    const pointedChar = str[i];

    if (redundantStack[redundantStack.length - 1] === pointedChar) {
      redundantStack.pop();
      lastDeletedChar = pointedChar;
    }

    if (lastDeletedChar !== pointedChar) {
      redundantStack.push(pointedChar);
      lastDeletedChar = '';
    }
  }

  return redundantStack.join('');
};

/**
 * main 함수
 * @param {string} cryptogram
 * @return {string}
 */
const problem2 = (cryptogram) => {
  let answer = cryptogram;

  // 중복문자가 없을때까지 반복
  while (!isTaskFinished(answer)) {
    answer = getRedundantDeletedString(answer);
  }

  return answer;
};

module.exports = problem2;

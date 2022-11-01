const problem2Util = require('../src/problem2Util');

function problem2(cryptogram) {
  let answer = '';
  const { isValidString, getDuplicatedInfoList } = problem2Util;

  try {
    if (!isValidString(cryptogram)) {
      throw new Error('invalid String(it must be include only lowerCase)');
    }

    // 원본을 변경하지 않을 수 있도록 한다
    let cryptogramArr = cryptogram.split('');

    while (1) {
      const duplicatedList = getDuplicatedInfoList(cryptogramArr);
      if (duplicatedList.length === 0) {
        break;
      } else {
        for (let i = duplicatedList.length - 1; i > -1; i--) {
          const [start, count] = duplicatedList[i];
          cryptogramArr.splice(start, count);
        }
      }
    }
    answer = cryptogramArr.join('');
  } catch {
    answer = -1;
  }
  return answer;
}

module.exports = problem2;

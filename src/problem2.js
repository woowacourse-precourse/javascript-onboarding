/**
 * 더이상 중복문자를 제거할 필요가 없는지 확인한다.
 * @param cryptogram
 * @return {boolean}
 */
const isTaskFinished = (cryptogram) => {
  for (let i = 1; i <= cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i - 1]) return false;
  }

  return true;
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;

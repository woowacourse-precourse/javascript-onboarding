// 이전 문자와 비교해서 같은 값이 아니라면 result 배열에 값을 추가하고
// 같은 값이라면 result 배열 마지막 값 삭제
function problem2(cryptogram) {
  const result = [];

  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] !== result[result.length - 1]) {
      result.push(cryptogram[i]);
    } else {
      result.pop();
    }
  }
  return result.join('');
}

module.exports = problem2;

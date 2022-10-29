function problem2(cryptogram) {
  var answer;
  console.log(cryptogram);
  getRepeated(cryptogram);
  return answer;
}

module.exports = problem2;

/**
 * 1. 반복되는 로직이 필요로 하다.(혹은 재귀적)
 * 2. 문자열에서 중복되는 지를 판별하는 함수가 필요로 하다.
 * 3. 문자열을 제거하는 함수가 필요로 하다.
 */

function getRepeated(str) {
  const results = [];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let continued = 0;

    for (let j = i + 1; j < str.length; j++) {
      let nextCh = str[j];

      if (ch !== nextCh) {
        if (continued !== 0) {
          results.push([i, i + continued]);
        }
        break;
      } else {
        continued++;
      }
    }
  }
  console.log(results);
}

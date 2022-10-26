// 1. 주어진 문자열 배열로 변경
// 2. for문을 통해 현재의 값과 다음 값이 동일하다면 현재 값과 다음 값 배열에서 splice
// 3. 배열에 원소가 없거나 더이상 중복이 없을때까지 반복
// 4. 배열 문자열 화

function problem2(cryptogram) {
  var answer;
  let flag = true;
  // List 화
  let cryptoList = cryptogram.split("");

  // 값 비교 for문
  while (flag) {
    // 원소가 없음
    if (cryptoList.length === 0) flag = false;

    for (let i = 0; i < cryptoList.length; i++) {
      if (cryptoList[i] === cryptoList[i + 1]) {
        cryptoList.splice(i, 2);
        break;
      }
      // 중복이 없음
      if (i === cryptoList.length - 1) flag = false;
    }
  }
  //문자열 화
  answer = cryptoList.join("");
  return answer;
}

module.exports = problem2;

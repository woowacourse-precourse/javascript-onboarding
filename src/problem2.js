function problem2(cryptogram) {

  // 문자열을 잘라 새로운 배열에 넣는다
  let cryptogramArr = cryptogram.split('');

  let i = 0;

  // 기존의 배열과 새로운 배열을 + 1한 값을 비교해 같은 값이 있을 경우 제거하는 while문
  while (i < cryptogramArr.length) {
    cryptogramArr[i] === cryptogramArr[i + 1] ? (cryptogramArr.splice(i, 2), (i = 0)) : (i += 1); //false i 1증가
  }

  // 하나의 문자열로 반환
  return cryptogramArr.join('');
}

module.exports = problem2;

function problem2(cryptogram) {

  // 문자열 분리
  const cryptoArr = cryptogram.split('');
  const result = [];

  /* 초기 문자 push(), result 배열의 최상단 값과 입력 값 비교 같으면(연속된 중복 문자)
     result.pop(), 중복이 아니면 해당 문자 push() */
  for (let i=0; i<cryptoArr.length; i++) {
    if (!result.length) {
      result.push(cryptoArr[i]);
    } else if (result[result.length-1] === cryptoArr[i]) {
      result.pop()
    } else if (result[result.length-1] !== cryptoArr[i]) {
      result.push(cryptoArr[i]);
    }
  }

  // 배열을 하나의 문자열로 return
  return result.join('');
}

module.exports = problem2;

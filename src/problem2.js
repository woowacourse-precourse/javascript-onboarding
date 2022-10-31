function problem2(cryptogram) {
  let result = cryptogram;
  // 결과 값 result 할당
  for (let j = 0; j < cryptogram.length; j++) {
    // 먄약 현재 인덱스값이 다음 인덱스 값의 밸류값이 같은 알파벳이면
    //아래 조건문에서 문자열을 잘라내고 멈춤
    if (cryptogram[j] === cryptogram[j + 1]) {
      result = cryptogram.slice(0, j) + cryptogram.slice(j + 2);
      break;
    }
  }
  // 결과값이 초기값과 같거나 빈문자열일때
  if (result == cryptogram || result == "") {
    // 결과값 리턴
    return result;
  } else {
    //아니면 재실행
    return problem2(result);
  }
}

module.exports = problem2;

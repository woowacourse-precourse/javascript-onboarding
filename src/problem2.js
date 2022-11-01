function problem2(cryptogram) {
  let answer;
  const regExp = /(\w)\1+/g;
  // 중복을 처리하기 위한 정규표현식  /전체에서 영단어+숫자+_ 중 1개 이상이 반복되는 것을 찾는다.

  while (cryptogram !== cryptogram.replace(regExp, ''))
    //더 이상 바꿀 수 없을 떄까지
    cryptogram = cryptogram.replace(regExp, '');
  //정규 표현식과 비교하여 해당내용 빈 문자열로 대체

  return (answer = cryptogram); //결과 반환
}

module.exports = problem2;

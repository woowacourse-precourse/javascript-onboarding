function problem4(word) {
  // 1. 기본 함수 정의
  // 1.1. 문자와 아스키코드의 양방 변형
  const cToAsc = (c) => c.charCodeAt(0);
  const ascToC = (asc) => String.fromCharCode(asc);

  // 1.2. 대문자 여부 확인 함수
  const checkIsUpper = (c) => {
    return cToAsc(c) <= cToAsc("Z");
  };

  // 1.3. 알파벳 여부 확인 함수
  const checkAlpha = (c) => {
    const alpha = /^[A-Za-z]+$/;
    return c.match(alpha);
  };

  // 2. 암호 해독 기준값 배열
  const sumValArr = [cToAsc("a") + cToAsc("z"), cToAsc("A") + cToAsc("Z")];

  // 3. 문자 -> 해독문자 변환 함수
  const convertFrog = (c) => {
    // 3.1. 문자가 대문자인지 소문자인지 판단
    const isUpper = checkIsUpper(c);
    const sumValArrIdx = isUpper ? 1 : 0;

    const convertAscToAsc = cToAsc(c);
    return ascToC(sumValArr[sumValArrIdx] - convertAscToAsc);
  };

  // 4. 변환된 문자열 정리 및 결과 반환
  let ret = "";
  const arr = word.split("");
  arr.forEach((c) => {
    ret += checkAlpha(c) ? convertFrog(c) : c;
  });
  return ret;
}

module.exports = problem4;

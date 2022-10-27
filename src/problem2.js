function problem2(cryptogram) {
  let answer;
  let isRepeat; // 연속하는 중복 문자 유무

  do {
    isRepeat = false;

    // 함수 1
    tmp = checkRepeat(cryptogram, isRepeat);
    cryptogram = tmp[0];
    isRepeat = tmp[1];
    
  } while (isRepeat)

  answer = cryptogram;
  return answer;
}

// 함수 1: 연속하는 중복 문자열 체크
function checkRepeat(cryptogram, isRepeat) {
  let yet = -1; // 임시 저장을 위한 변수

  for (let i = 0; i < cryptogram.length; i++) {
    // 연속하는 중복 문자열 발견 시,
    if (cryptogram[i] == cryptogram[i + 1]) {      
      isRepeat = true;
      
      // "앞"의 문자를 삭제
      cryptogram = cryptogram.slice(0, i) + cryptogram.slice(i + 1);

      // "뒤"의 문자를 yet 변수에 임시 저장 => 3개 이상 연속하는 중복 문자열에 대한 처리 위함
      yet = i;
      i -= 1;

      continue
    }

    // "중복 되었던 "뒤" 문자와 그 다음 문자가 같지 않은 경우
    if (yet != -1) {
      // "뒤" 문자도 삭제
      cryptogram = cryptogram.slice(0, yet) + cryptogram.slice(yet + 1);
      yet = -1;
      i -= 1;
    }
  }

  return [cryptogram, isRepeat];
}

module.exports = problem2;
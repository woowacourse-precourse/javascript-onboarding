// 0. 예외처리
//  0.1 [x] 문자열이 비었거나 하나의 문자만 있는 경우

// 1. 문자열 제거 로직
//  1.1 [x] 문자열을 앞에서부터 (중복되지 않는 문자열만) 하나씩 answer에 더한다

// 2. 1번 로직 반복 기준
//  2.1 [x] flag로 연속으로 같은 문자열이 있는지 판별 
//  2.2 [x] 연속되는 문자열이 있으면 true, 아니면 false

const removeCharcater = (res, cryptogram) => {
  for (let i=0; i<cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      i += 2;
    } else {
      res += cryptogram[i];
    }
  }

  return res;
}

const checkOverlap = (cryptogram) => {
  if (cryptogram.length === 0 || cryptogram.length === 1) {
    return false;
  }

  for (let i=0; i<cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) return true;
  }

  return false;
}

function problem2(cryptogram) {
  let answer = '';

  if (cryptogram.length === 0) return answer;
  if (cryptogram.length === 1) return cryptogram;

  let flag = true;

  while (flag) {
    answer = removeCharcater(answer, cryptogram);
    flag = checkOverlap(answer);
  }

  return answer;
}

module.exports = problem2;

function problem2(cryptogram) {
  let answer = cryptogram;

  while (getIsRepeatExist(answer)) {
    answer = getModifiedCryptogram(answer);
  }

  return answer;
}

function getIsRepeatExist(cryptogram) {
  let isRepeatExist = false;
  for (let i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i - 1] === cryptogram[i]) {
      isRepeatExist = true;
      break;
    }
  }
  return isRepeatExist;
}

function getModifiedCryptogram(cryptogram) {
  let modifiedCryptogram = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (i == 0 && cryptogram[i] !== cryptogram[i + 1]) {
      modifiedCryptogram.push(cryptogram[0]);
      continue;
    }
    if (i == cryptogram.length - 1 && cryptogram[i - 1] !== cryptogram[i]) {
      modifiedCryptogram.push(cryptogram[i]);
      continue;
    }
    if (
      cryptogram[i] !== cryptogram[i - 1] &&
      cryptogram[i] !== cryptogram[i + 1]
    )
      modifiedCryptogram.push(cryptogram[i]);
  }
  return modifiedCryptogram.join("");
}

module.exports = problem2;

// 입력값 : 문자열

// 구현할 기능
// 중복되는 값이 있는지 판별하는 함수
// 중복되는 값 삭제하는 함수

// 구현 방향성
// 중복되는 값이 없을 때까지 반복하는 반복문을 작성한다.
// 중복되는 값을 찾아 모두 삭제한다.
// 반복문을 돌며 이전 알파벳과 다음 알파벳을 확인한다.
// 현재 알파벳과 앞 뒤 두 알파벳이 다를 때 현재 알파벳을 배열에 추가한다.
// 단, 첫번째 알파벳과 마지막 알파벳은 각각 뒤의 알파벳, 앞의 알파벳만을 고려한다.

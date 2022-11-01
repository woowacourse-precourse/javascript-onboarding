/**
 *
 * @param {string} cryptogram
 * @returns
 */

function problem2(cryptogram) {
  if (cryptogram.length < 1) {
    return cryptogram;
  } else if (cryptogram.length === 2) {
    if (cryptogram[0] !== cryptogram[1]) {
      return cryptogram;
    } else {
      return "";
    }
  }

  const seperate = cryptogram.split("");
  let ptr1 = 0;
  let ptr2 = 1;
  while (ptr2 < seperate.length) {
    if (seperate[ptr1] !== seperate[ptr2]) {
      ptr1++;
      ptr2++;
    } else if (seperate[ptr1] === seperate[ptr2]) {
      seperate.splice(ptr1, 2);
      ptr2 = ptr1;
      ptr1 = ptr1 - 1;
    }
  }

  if (seperate.length > 0) {
    const answer = seperate.join("");
    return answer;
  } else {
    return "";
  }
}

module.exports = problem2;

/**
 * 두 개의 포인터를 이용하여 문자를 정리하는 것이 효율적이라 생각하여
 * 한 개의 포인터가 중복되는 단어를 찾았을 경우에는 해당 인덱스보다 한
 * 값 전의 값으로 이동하여 두번째 포인터가 끝까지 이동하여 탐색하게 함수를
 * 만들었습니다.
 */

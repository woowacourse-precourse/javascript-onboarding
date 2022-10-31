function problem2(cryptogram) {
  var answer;
  if (validExceptions) {
    answer = deleteOverlap(cryptogram);
    return answer;
  }
  else {
    throw new Error("잘못된 입력입니다.");
  }
}

/**
 * 중복 문자 제거 메소드
 * @param {string} cryptogram 중복 제거 대상 암호문
 * @returns {string} 중복 제거된 암호문
 */
function deleteOverlap(cryptogram) {
  const stack = [cryptogram[0]];
  let index = 1;
  
  while (index < cryptogram.length) {  
    if (stack[stack.length-1] != cryptogram[index]) {
      stack.push(cryptogram[index]);
    }
    else {
      while (stack[stack.length - 1] == cryptogram[index]) {
        stack.pop();
      }

      // 연속된 중복문자가 3개 이상인 경우에 대한 과정 추가
      while (cryptogram[index] == cryptogram[index + 1]) {
        index++;
      }
    }

    index++;
  }

  return stack.join("");
}


// 예외 처리
function validExceptions(cryptogram) {
  return (validRange(cryptogram) && validLetters(cryptogram));
}

function validRange(arr) {
  return (arr.length >= 1 && arr.length <= 1000);
}

function validLetters(str) {
  const reg = /^[a-z]*$/;

  return reg.test(str);
}

module.exports = problem2;
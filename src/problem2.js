// 2022 Kimjungwon 우아한테크코스 문제풀이 2

// 제한사항처리 함수
// 문자열의 길이는 1이상 1000이하이다.
function isException(str) {
  if (str.length < 1 || str.length > 1000)
    return true;

  return false;
}

/**
 * 
 * 문자열에서 연속하는 중복 문자들을 삭제하는 함수
 * 
 * @param str 검사를 필요로 하는 문자열
 * @return result는 중복을 삭제한 문자열(str)과 중복검사도중에 문자열에서 마지막으로 찾은 인덱스를 객체에 담아서 리턴한다. 
 */
function sliceOverlap(str) {
  let tmpStr = "";
  let overlapedIndex = -100;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (overlapedIndex + 1 !== i)
        tmpStr += str[i];

    }
    else {
      overlapedIndex = i;
    }
  }
  let result = {
    str: tmpStr,
    checkIndex: overlapedIndex,
  }
  return result;
}

function problem2(cryptogram) {
  //입력값이 옳지 않으면 비정상종료(isException이 true일때)
  if (isException(cryptogram)) {
    return -1;
  }
  //제한사항을 따르기 위해서 입력값은 무조건 소문자로 사용하게끔 함 (toLowerCase())
  let answer = cryptogram.toLowerCase();
  // while문 종료조건인 변수(checkEnd)
  let checkEnd = 1;

  let result;

  //sliceOverlap함수에서 반환받은 checkEnd는 더이상 중복된 것이 없다면 -100을 반환하여 while문이 종료된다.
  while (checkEnd > -1) {
    result = sliceOverlap(answer);
    answer = result.str;
    checkEnd = result.checkIndex;
  }

  return answer;
}

console.log(problem2("browoanoommnaon"));
module.exports = problem2;

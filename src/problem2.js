// 기능 목록
// 1. 중복 위치 찾기
// 2. 중복 제거
// 3. 중복 없을 때까지 1-2번 반복하기

const redundancyCheck = (str) => {
  let arr = str.split('');

  for(let i=1; i<arr.length; i++) {
    if(arr[i-1] === arr[i]) {
      arr.splice(i-1, 2);
      i--;
    }
  }

  return arr.join('');
}

function problem2(cryptogram) {
  let result = cryptogram;
  while(1) {
    if(result === redundancyCheck(result)) {
      return result;
    }else {
      result = redundancyCheck(result);
    }
  }
}

module.exports = problem2;
// 기능 목록
// 1. 중복 위치 찾기
// 2. 중복 제거
// 3. 중복 없을 때까지 1-2번 반복하기
// + 예외처리 (연속 되는 문자가 2개 이상일 때)

const redundancyCheck = (str) => {
  if(str.length === 0) return '';

  let arr = str.split('');
  let target = arr[0];
  let idx = 0;
  for(let i=1; i<arr.length; i++) {
    if(arr[i] === target) { // target이랑 같을 때 
      continue;
    }else if(arr[i] !== target && idx !== i-1) { // target이랑 같지 않은데, 이전에 연속 되는 문자가 있을 때
      const cnt = i-idx;
      target = arr[i];
      arr.splice(idx, cnt);
      
      idx = i-cnt;
      i = idx;
    }else { // target이랑 같지 않고, 이전에 연속 되는 문자가 없을 때
      target = arr[i];
      idx = i;
    }
  }

  if(idx !== arr.length-1) {
    arr.splice(idx);
  }

  return arr.join('');
}

function problem2(cryptogram) {
  let compare = cryptogram;
  while(1) {
    const str = redundancyCheck(compare)
    if(compare === str) {
      return compare;
    }else {
      compare = str;
    }
  }
}

module.exports = problem2;

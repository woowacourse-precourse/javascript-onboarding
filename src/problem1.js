// 기능 목록
// 1. 페이지 번호 split
// 2. 1번에서 나온 숫자 더하기 & 곱하기
// 3. 2번에서 나온 숫자 중, 최대값 찾기
// 4. 포비와 크롱 중, 승자 구하기
// + 예외 처리 (페이지 수)

const sum = (arr) => {
  return result = arr.reduce((pv, cv) => {
    return pv+cv;
  });
};

const mul = (arr) => {
  return result = arr.reduce((pv, cv) => {
    return pv*cv;
  });
};

const exceptionCheck = (pobi, crong) => {
  // 페이지 수가 이어지는지 판단
  if(pobi[1]-pobi[0] !== 1 || crong[1]-crong[0] !== 1) {
    return false;
  }
  
  // 왼쪽 홀수, 오른쪽 짝수 판단
  if(pobi[0]%2 !== 1 || crong[0]%2 !== 1) {
    return false;
  }
  if(pobi[1]%2 !== 0 || crong[1]%2 !== 0) {
    return false;
  }

  return true;
}

function problem1(pobi, crong) {
  // 예외 처리
  if(!exceptionCheck(pobi, crong)) return -1;

  // 페이지 번호 split
  const pobiSplit = [];
  const crongSplit = [];
  for(let i=0; i<2; i++) {
    pobiSplit.push(pobi[i].toString().split('').map(Number));
    crongSplit.push(crong[i].toString().split('').map(Number));
  }

  // 숫자 더하기 & 곱하기
  const pobiSumMul = [];
  const crongSumMul = [];
  for(let i=0; i<2; i++) {
    pobiSumMul.push(...[sum(pobiSplit[i]), mul(pobiSplit[i])]);
    crongSumMul.push(...[sum(crongSplit[i]), mul(crongSplit[i])]);
  }

  // 최대값 찾기
  const pobiMax = Math.max(...pobiSumMul);
  const crongMax = Math.max(...crongSumMul);

  // 승자 구하기
  if(pobiMax > crongMax) {
    return 1;
  }else if(pobiMax < crongMax) {
    return 2;
  }else if(pobiMax === crongMax) {
    return 0;
  }
}

module.exports = problem1;
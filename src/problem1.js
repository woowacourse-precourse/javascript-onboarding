// 기능 목록
// 1. 페이지 번호 split
// 2. 1번에서 나온 숫자 더하기 & 곱하기
// 3. 2번에서 나온 숫자 중, 최대값 찾기
// 4. 포비와 크롱 중, 승자 구하기

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

function problem1(pobi, crong) {
  const pobiSplit = [];
  const crongSplit = [];
  for(let i=0; i<2; i++) {
    pobiSplit.push(pobi[i].toString().split('').map(Number));
    crongSplit.push(crong[i].toString().split('').map(Number));
  }

  const pobiSumMul = [];
  const crongSumMul = [];
  for(let i=0; i<2; i++) {
    pobiSumMul.push(...[sum(pobiSplit[i]), mul(pobiSplit[i])]);
    crongSumMul.push(...[sum(crongSplit[i]), mul(crongSplit[i])]);
  }

  const pobiMax = Math.max(...pobiSumMul);
  const crongMax = Math.max(...crongSumMul);

  if(pobiMax > crongMax) {
    return 1;
  }else if(pobiMax < crongMax) {
    return 2;
  }else if(pobiMax === crongMax) {
    return 0;
  }
}

module.exports = problem1;

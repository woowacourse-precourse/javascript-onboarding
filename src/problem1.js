// 기능 목록
// 1. 페이지 번호 split
// 2. 1번에서 나온 숫자 더하기 & 곱하기
// 3. 2번에서 나온 숫자 중, 최대값 찾기
// 4. 포비와 크롱 중, 승자 구하기

function problem1(pobi, crong) {
  const pobiSplit = [];
  const crongSplit = [];
  for(let i=0; i<2; i++) {
    pobiSplit.push(pobi[i].toString().split('').map(Number));
    crongSplit.push(crong[i].toString().split('').map(Number));
  }

  console.log(pobiSplit, crongSplit);
}

module.exports = problem1;

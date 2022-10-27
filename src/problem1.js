// 기능 목록
// 1. 페이지 번호 split
// 2. 1번에서 나온 숫자 더하기 & 곱하기
// 3. 2번에서 나온 숫자 중, 최대값 찾기
// 4. 포비와 크롱 중, 승자 구하기

function problem1(pobi, crong) {
  for(let i=0; i<2; i++) {
    pobi[i] = pobi[i].split('').map(Number);
    crong[i] = crong[i].split('').map(Number);
  }
}

console.log(problem1([97, 98], [197, 198]))

module.exports = problem1;

/*
  기능 목록
  1. 예외사항 처리 
  2. 각 자리의 수를 더하고 곱해서 가장 큰 수 구하기
  3. 점수를 비교해서 답 도출하기
*/

function maxCalc(str) {
  const sum = str
    .toString()
    .split("")
    .reduce((initial, current) => initial + Number(current), 0);
  const multi = str
    .toString()
    .split("")
    .reduce((initial, current) => initial * Number(current), 1);

  return Math.max(sum, multi);
}

function compare(val1, val2) {
  if (val1 > val2) return 1;
  if (val1 < val2) return 2;
  if (val1 === val2) return 0;
}

function problem1(pobi, crong) {
  const pobiRes = Math.max(...pobi.map((e) => maxCalc(e)));
  const crongRes = Math.max(...crong.map((e) => maxCalc(e)));
  return compare(pobiRes, crongRes);
}

module.exports = problem1;

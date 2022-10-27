/*
  기능 목록
  1. 각 자릿수의 합과 곱중 최댓값을 반환하는 findMax 함수 구현
    1-1. 예외값 우선처리 (첫페이지와 끝페이지는 불가능, 왼쪽값은 홀수만, 오른쪽값음 짝수만 가능)
    1-2. 각 자릿수의 합과 곱중 더 큰값을 리턴
  2. 포비가 더 큰 수를 가지면 1 크롱이 더 큰수를 가지면 2 동일하면 0 예외시 -1 리턴
*/
function findMax(nums) {
  if ( nums[0] === 1 || nums[0] % 2 === 0 || nums[1] === 400 || nums[1] % 2 !== 0 || nums[1] - nums[0] !== 1 ) return -1;
  let maxAdd = 0, maxMulti = 0;
  for (let i = 0; i < nums.length; i++) {
    let add = 0, multi = 1;
    do {
      add += nums[i] % 10;
      multi *= nums[i] % 10;
      nums[i] = Math.floor(nums[i] / 10);
    } while (nums[i] > 0);
    if (maxAdd < add) maxAdd = add;
    if (maxMulti < multi) maxMulti = multi;
  }
  return maxAdd > maxMulti ? maxAdd : maxMulti;
}

function problem1(pobi, crong) {
  let answer;

  let pobi_maxNum = findMax(pobi);
  let crong_maxNum = findMax(crong);

  if (pobi_maxNum === -1 || crong_maxNum === -1) answer = -1;
  else if (pobi_maxNum > crong_maxNum) answer = 1;
  else if (pobi_maxNum < crong_maxNum) answer = 2;
  else answer = 0;

  return answer;
}
module.exports = problem1;
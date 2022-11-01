/* 예외 처리
  0. [x] (2 ~ 398) 사이 숫자일 것
  1. [x] 한 사람의 페이지 숫자는 연속적일 것

  로직
  1. pobi와 crong이 가질 수 있는 가장 큰 수 구하기
    1.1 [x] 가지고 있는 페이지의 자릿수를 배열로 만들기
    1.2 [x] 배열의 각 자릿수를 더하고 곱하여 가장 큰 수 구하기
  2. [x] pobi의 maxNum과 crong의 maxNum을 비교하기
*/

/**
 * calculate sum of nums
 * @param {number[]} nums 
 * @returns {number}
 */
const plus = (nums) => {
  return nums.reduce((prev, curr) => {
   return prev + curr;
  }, 0);
}

/**
 * calculate multiple of nums
 * @param {number[]} nums 
 * @returns {number}
 */
const multiple = (nums) => {
  return nums.reduce((prev, curr) => {
    return prev * curr;
  }, 1);
}

/**
 * split page to make each number
 * @param {number} page - number of page
 * @return {number[]} pageArray - each number of page
 */
 const makePageArray = (page) => {
  const pageArray = [];

  while (page) {
    pageArray.push(page % 10);
    page = parseInt(page / 10);
  }

  return pageArray;
}

// 1. pobi와 crong이 가질 수 있는 가장 큰 숫자 구하기
/**
 * calculate max number of pobi and crong
 * @param {number[]} pobi - pages pobi has
 * @param {number[]} crong - pages crong has 
 * @returns {number[]} [pobiMax, crongMax] - max number of pobi & crong
 */
const calMax = (pobi, crong) => {
  const pobiFirst = makePageArray(pobi[0]);
  const pobiSecond = makePageArray(pobi[1]);
  const crongFirst = makePageArray(crong[0]);
  const crongSecond = makePageArray(crong[1]);

  // 더하거나 곱한 것 중 가장 큰 수 구하기
  const pobiMax = Math.max(
    plus(pobiFirst), 
    plus(pobiSecond), 
    multiple(pobiFirst), 
    multiple(pobiSecond)
  );
  const crongMax = Math.max(
    plus(crongFirst), 
    plus(crongSecond), 
    multiple(crongFirst), 
    multiple(crongSecond)
  );

  return [pobiMax, crongMax];
}

/**
 * main Function - return who has page of max number
 * @param {number[]} pobi - pages pobi has
 * @param {number[]} crong - pages crong has
 * @returns {number} answer - return number indicates who has max page
 */
function problem1(pobi, crong) {
  let answer = -1;

  // 0. 예외 처리
  // 0.1 첫페이지와 마지막 페이지가 아닐 것
  if (pobi[1] <= 2 || pobi[0] >= 399) return answer;
  if (crong[1] <= 2 || crong[0] >= 388) return answer;
  // 0.2 각 페이지는 연속적일 것 
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return answer; 

  // 1. pobi와 crong이 가지고 있는 수 중 가장 큰 수 구하기 
  const [maxPobi, maxCrong] = calMax(pobi, crong);
  
  // 2. pobi와 crong 중 더 큰 숫자를 가진 사람이 pobi면 1, crong이면 2, 무승부면 0
  if (maxPobi > maxCrong) {
    answer = 1;
  } else if (maxPobi < maxCrong) {
    answer = 2;
  } else {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;

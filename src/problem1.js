const isExceptCase = (arr) => {
  const [a, b] = arr.map(Number);
  //앞페이지가 짝수거나 뒷페이지가 홀수일때
  if (a % 2 === 0 || b % 2 === 1) return true;
  //앞페이지, 뒷페이지 모두 0보다 작을때
  if (a < 0 || b < 0) return true;
  //뒷페이지값이 앞페이지값보다 작거나 클 때
  if (b <= a) return true;
  //시작면 또는 마지막 면을 펼쳤을 때
  if (a === 0 || b === 400) return true;
  //뒷페이지-앞페이지가 1이 아닐때.
  if (b - a !== 1) return true;

  // 모두 통과하면 예외사항 아니므로 false 반환\
  return false;
};

const splitToNumArray = (int) => {
  const strFromInt = int.toString();
  return strFromInt.split("").map(Number);
};

const splitAndSum = (arr) => {
  const [a, b] = arr;
  let sumA = splitToNumArray(a).reduce((prev, cur) => (prev += cur));
  let sumB = splitToNumArray(b).reduce((prev, cur) => (prev += cur));

  return Math.max(sumA, sumB);
};

const splitAndMultiply = (arr) => {
  const [a, b] = arr;
  let mulA = splitToNumArray(a).reduce((prev, cur) => (prev *= cur));
  let mulB = splitToNumArray(b).reduce((prev, cur) => (prev *= cur));
  return Math.max(mulA, mulB);
};

const compare = ({ pobi, crong }) => {
  if (pobi > crong) return 1;
  else if (pobi < crong) return 2;
  else return 0;
};

function problem1(pobi, crong) {
  var answer;

  //포비 크롱 중 예외사항 발생할 경우 -1 리턴
  if (isExceptCase(pobi) || isExceptCase(crong)) return -1;

  //최대값 확인
  const pobiMax = Math.max(splitAndSum(pobi), splitAndMultiply(pobi));
  const crongMax = Math.max(splitAndSum(crong), splitAndMultiply(crong));
  answer = compare({ pobi: pobiMax, crong: crongMax });

  return answer;
}

module.exports = problem1;

// 생각보다 예외가 많구나..
// 기능별로 함수를 분리하고 싶어서 분리했는데 오히려 읽기 어려운 코드가 된것 같다
// 변수,함수 이름 정하기가 쉽지않다

// function problem1(pobi, crong) {
//   var answer;
//   return answer;
// }

// function problem1(pobi, crong) {
//   var answer;
//   return answer;
// }

// module.exports = problem1;

/* 포비와 크롱이 페이지 번호가 1부터 시작되는 400 페이지의 책을 주웠다. 
책을 살펴보니 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수 번호이고 모든 페이지에는 번호가 적혀있었다.
 책이 마음에 든 포비와 크롱은 페이지 번호 게임을 통해 게임에서 이긴 사람이 책을 갖기로 한다.
  페이지 번호 게임의 규칙은 아래와 같다.

책을 임의로 펼친다.
왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때, 포비가 이긴다면 1, 
크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return 하도록 solution 메서드를 완성하라.

제한사항
pobi와 crong의 길이는 2이다.
pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다. */

//시작 번호와 끝번호 상수 선언
const PAGE_START = 1;
const PAGE_END = 400;

//랜덤한 숫자가 홀수인지 짝수인지 판별하는 함수  //이미 isOdd 같은건 없나?
function isOdd(num) {
  if (num % 2 === 0) return true;
  else return false;
}

//1~ 399 페이지 난수 생성 함수  //범위를 가진 난수는 어떻게 만들지??
function createPage() {
  let page = Math.floor(Math.random() * (PAGE_END - PAGE_START)) + PAGE_START;

  // 난수가 짝수인지 판별하기 위해
  if (isOdd(page)) return [page - 1, page];
  else return [page, page + 1];
}

//숫자 리터럴을 배열로 변환하는 함수
function numToArr(num) {
  origin = num.toString().split("");
  arr = origin.map(Number);
  return arr;
}

//배열의 숫자를 계산해서 높은값을 리턴하는 함수
function pageResult(arr) {
  const sumResult = arr.reduce((a, b) => a + b);
  const multipleResult = arr.reduce((a, b) => a * b);

  if (sumResult > multipleResult) return sumResult;
  else return multipleResult; // sum 값이 높은지 확인하여 sum과 multi 중 반환값을 결정.
}

//배열의 숫자를 처리 하는 함수 // 숫자나 문자를 배열로 만들어아하는데?
//리듀스 사용(누산값, 현재값)
function calcPage(arr) {
  [start, next] = [...arr];

  const startPage = numToArr(start);
  const nextPage = numToArr(next); //페이지 숫자를 숫자 배열로 변환

  const startResult = pageResult(startPage);
  const nextResult = pageResult(nextPage); //숫자 배열에서 계산된 값중 높은값을 반환

  if (startResult > nextResult) return startResult; // 높은 숫자를 리턴
  else return nextResult; //
}

/* 문제 분석 
1. 포비와 크롱이 1~400 페이지의 책을 주웠음.
2. 왼쪽은 홀수, 오른쪽은 짝수 페이지
3. 페이지 번호 게임을 통해 이긴 사람이 책을 가진다.
3-1. 규칙
  - 책을 임의로 펼친다.
  - 왼쪽 페이지의 각 자리 숫자를 모두 더하거나 모두 곱해서 가장 큰 수를 구한다.
  - 오른쪽 페이지의 각 자리 숫자를 모두 더하거나 모두 곱해서 가장 큰 수를 구한다.
  - 둘 중 가장 큰 수가 본인의 점수
  - 점수가 더 높으면 승리
  - 시작 면이나 마지막 면은 제외한다.
4. 결과는 다음과 같이 표현한다.
  - 1 = 포비 승
  - 2 = 크롱 승
  - 0 = 무승부
  - -1 = 예외사항
*/
/* 테스트 케이스 분석
tc1. 포비 : [97, 98], 크롱 : [197, 198]
포비 : max([9+7, 9+8, 9*7, 9*8]) => 72
크롱 : max([1+9+7, 1+9+8, 1*9*7, 1*9*8]) => 72
return : 0 (무승부)

tc2. 포비 : [131, 132], 크롱 : [211, 212]
포비 : max([1+3+1, 1+3+2, 1*3*1, 1*3*2]) => 6
크롱 : max([2+1+1, 2+1+2, 2*1*1, 2*1*2]) => 5 
return : 1 (포비 승)

tc3. 포비 : [99, 102], 크롱 : [211, 212]
포비 : 올바르지 않은 페이지 (return -1)
크롱 : 정상
return : -1 (예외 사항)
*/

// verifyPage(pages : array) : boolean
// 페이지 배열이 규칙에 맞는 정상적인 배열인지를 검사
function verifyPage(pages) {
  if (pages[0] + 1 === pages[1]) return true;
  else return false;
}

// getMaxNumber(pages : array) : number
// 두 개의 페이지로부터 나올 수 있는 모든 합/곱의 경우의 수에서 최대 값을 반환
function getMaxNumber(pages) {
  let numbers = [];
  pages.forEach((page) => {
    // 고민 1. 단순 반복의 용도와 성능을 고려했을때, map 보다는 forEach가 우세
    let sum = 0;
    let multiply = 1;
    let arr = page
      .toString()
      .split("")
      .map((el) => +el);

    arr.map((el) => {
      sum += el;
      multiply *= el;
    });
    numbers.push(sum, multiply);
  });
  return Math.max(...numbers); // 고민 2. Math.max()에서, 인수 배열을 spread 한 이유
}

// main
function problem1(pobi, crong) {
  // 하나라도 정상적인 배열이 아니라면 -1을 반환
  if (!verifyPage(pobi) || !verifyPage(crong)) return -1;

  // 포비가 승리했다면 1을 반환
  if (getMaxNumber(pobi) > getMaxNumber(crong)) return 1;
  // 크롱이 승리했다면 2를 반환
  else if (getMaxNumber(pobi) < getMaxNumber(crong)) return 2;
  // 그 외(무승부)라면 0을 반환
  else return 0;
}

module.exports = problem1;

function problem1(pobi, crong) {
  if (pobi[1]-pobi[0] !==1 || pobi[0] % 2 ==0 || crong[1]-crong[0] !==1 || crong[0] % 2 ==0){
    return -1;
  }
  
  let pobiValue = Math.max(sumArrayNumber(stringToNumberArray(pobi[0])), sumArrayNumber(stringToNumberArray(pobi[1])), multiplyArrayNumber(stringToNumberArray(pobi[0])), multiplyArrayNumber(stringToNumberArray(pobi[1])))
  let crongValue = Math.max(sumArrayNumber(stringToNumberArray(crong[0])), sumArrayNumber(stringToNumberArray(crong[1])), multiplyArrayNumber(stringToNumberArray(crong[0])), multiplyArrayNumber(stringToNumberArray(crong[1])))

  if (pobiValue > crongValue){
    return 1;
  }
  if (pobiValue == crongValue){
    return 0;
  }
  if (pobiValue < crongValue){
    return 2;
  }
}
module.exports = problem1;

const stringToNumberArray = (n) => String(n).split('').map(char => Number(char));
const sumArrayNumber = (array) => array.reduce((prev, cur) => {return prev + cur}, 0);
const multiplyArrayNumber = (array) => array.reduce((prev, cur) => {return prev * cur}, 1);

//problem 1 기능 목록
//[x]주어진 숫자를 자릿수별로 분리하여 배열화하는 기능을 구현한다.
//  [x]string()함수와 .split 메서드를 이용해 숫자를 문자열로 변환한 후 각 자릿수에 해당하는 값을 문자열로 포함하는 배열을 생성한다.
//  [x]map 함수를 이용해 문자열을 숫자로 변환한다.
//[x]reduce 함수를 이용해 주어진 배열에 대한 연산 기능을 구현한다.
//  [x]reduce 함수를 이용해 배열 내의 모든 값을 더하는 기능을 구현한다.
//  [x]reduce 함수를 이용해 배열 내의 모든 값을 곱하는 기능을 구현한다.
//[x]pobiValue 변수와 crongValue 변수를 구현한다.
//  [x]각 변수에는 Math.max 함수를 이용하여 왼쪽 페이지의 합과 곱, 오른쪽 페이지의 합과 곱을 비교하여 가장 큰 수를 산출한다.
//[x]pobiValue와 crongValue 변수를 비교하여 정답을 산출하는 로직을 구현한다.
//  [x]이 때, else 예약어를 사용하지 않는다.
//    [x]pobiValue가 crongValue보다 클 때 1을 return한다.
//    [x]pobiValue가 crongValue와 같을 때 0을 return한다.
//    [x]pobiValue가 crongValue보다 작을 때 2를 return한다.
//[x]pobiValue와 CrongValue 연산 이전에 예외값 로직을 선언한다.
//  [x]pobi 혹은 crong의 페이지가 서로 연속되지 않는 페이지일 때 예외사항으로 판단하여 -1을 return한다.
//  [x]pobi 혹은 crong의 왼쪽 페이지가 홀수가 아닐 때 예외사항으로 판단하여 -1을 return한다.
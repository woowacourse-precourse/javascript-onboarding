function problem1(pobi, crong) {
  let answer = null;

  if(!validation(pobi) || !validation(crong)) return -1;

  // get sum & multlple values of pobi & crong
  let pLeftValues = getSumAndMultpleValue(pobi[0]);
  let pRigthValues = getSumAndMultpleValue(pobi[1]);
  let cLeftValues = getSumAndMultpleValue(crong[0]);
  let cRightValues = getSumAndMultpleValue(crong[1]);

  // get pobi's max value
  const pobiMaxValue = getMaxValue(getMaxValue(pLeftValues[0], pLeftValues[1]), getMaxValue(pRigthValues[0], pRigthValues[1]));
  const crongMaxValue = getMaxValue(getMaxValue(cLeftValues[0], cLeftValues[1]), getMaxValue(cRightValues[0], cRightValues[1]));

  // 포비가 이긴다면 1 / 크롱이 이긴다면 2 / 무승부는 0 / 예외사항은 -1
  if(pobiMaxValue > crongMaxValue) answer = 1;
  else if(crongMaxValue > pobiMaxValue) answer = 2;
  else if(pobiMaxValue === crongMaxValue) answer = 0;
  
  return answer;
}

function getMaxValue(num1, num2) {
  return Math.max(num1, num2);
}

function getSumAndMultpleValue(num) {
  let sum = 0;
  let mul = 1;
  while(num > 0) {
    let n = num % 10;
    sum += n;
    mul *= n;
    num = Math.floor(num / 10);
    // console.log(num);
  }
  return [sum, mul];
}

function validation(arr) {
  // 유효성 검사를 위한 함수 올바른 데이터가 들어왔으면 true를 리턴 / 아니면 false를 리턴
  // 오른쪽 페이지가 항상 크므로 두 수의 차가 1이 아니면 유효하지 않은 데이터
  if(arr[1] - arr[0] != 1) {
   return false; 
  }

  return true;
}

/* function getNumberLength(num) {
  return Math.ceil(Math.log10(num + 1));
}
console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212])); */

module.exports = problem1;


function calculateMaxNum(arr){
  let leftNum = arr[0];
  let rightNum = arr[1];
  let leftSum = 0;
  let rightSum = 0;
  let leftMulti = 0;
  let rightMulti = 0;
  //왼쪽 합, 곱 계산 -> 둘 중 큰 수 찾기
  do {
    leftSum += leftNum%10;
    leftMulti *= leftNum%10;
    leftNum = Math.floor(leftNum/10);
  }while(leftNum > 0);
  let maxLeft = (leftSum > leftMulti) ? leftSum : leftMulti;
  //오른쪽 합, 곱 계산 -> 둘 중 큰 수 찾기
  do {
    rightSum += rightNum%10;
    rightMulti *= rightNum%10;
    rightNum = Math.floor(rightNum/10);
  }while(rightNum > 0);
  let maxRight = (rightSum > rightMulti) ? rightSum : rightMulti;

  //왼쪽, 오른쪽 수 비교 후 큰 수 리턴
  let maxNum = (maxLeft > maxRight) ? maxLeft : maxRight;
  return maxNum;
}

//예외사항(페이지 숫자가 연속된 숫자인지 확인, 1-400페이지에 해당하지 않는 숫자)
function checkPage(page){
  if(page[1]-page[0] > 1 || page[0] < 1 || page[1] > 400){
    return 1;
  }
  else return 0;


function problem1(pobi, crong) {
  //var answer;
  let pobiMaxNum;
  let crongMaxNum;
  //예외사항 체크
  let checkPobi = checkPage(pobi);
  let checkCrong = checkPage(crong);
  if(checkPobi == 1 || checkCrong == 1){
    return -1;
  }
  else{
    pobiMaxNum = calculateMaxNum(pobi);
    crongMaxNum = calculateMaxNum(crong);

    //pobi, crong 최종 수 비교
    if(pobiMaxNum > crongMaxNum) return 1;
    else if(pobiMaxNum < crongMaxNum) return 2;
    else return 0;
  }
  
  //return answer;
}

module.exports = problem1;

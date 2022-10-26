function check_valid(arr){
  // 1-1. 왼쪽페이지가 짝수이거나 오른쪽페이지가 홀수인 경우 오류
  // 1-2. 오른쪽페이지-왼쪽페이지==1 이 아닌 경우(연속된 페이지가 아닌 경우) 오류
  // 1-3. 페이지가 1~400 사이가 아닌 경우 오류
  var isValid = true
  if(arr[0]%2==0 || arr[1]%2==1 ||(arr[1]-arr[0])!=1 ||
  arr[0]<1|| arr[0]>400 || arr[1]<0 || arr[1]>400){
    isValid = false
  }
  return isValid
}
function problem1(pobi, crong) {
  var answer;
  // 1. 예외사항인 경우(페이지 번호 규칙이 안맞는 경우)
  if(!check_valid(pobi) || !check_valid(crong)){
    answer = -1
  }
  else{
    
  }
  return answer;
}

module.exports = problem1;

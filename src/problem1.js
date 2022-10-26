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
function div_num(num){
  // 넘겨받은 숫자를 자릿수로 나누어 배열로 return하는 함수
  var arr = []
  while (num>0){
    now_num = num%10
    arr.push(now_num)
    num = parseInt(num/10)
  }
  return arr
}
function cal_arr(arr){
  // 넘겨받은 배열을 순회하며 덧셈, 곱셈 결과 구하고, 최댓값을 return하는 함수
  var sum = 0
  var mul = 1
  var bigger = 0
  arr.forEach(element => {
    sum+=element
    mul*=element
  });
  // 결과 값 비교해서 큰 값 return 
  bigger = Math.max(sum,mul)
  return bigger
}
function problem1(pobi, crong) {
  var answer;
  // 1. 예외사항인 경우(페이지 번호 규칙이 안맞는 경우)
  if(!check_valid(pobi) || !check_valid(crong)){
    answer = -1
  }
  else{
    // 2-1.pobi,crong 각각 왼쪽페이지 번호 자릿수 나누기
    var left_pobi = div_num(pobi[0])
    var left_crong = div_num(crong[0])
    // 2-2.pobi,crong 각각 오른쪽 페이지 번호 자릿수 나누기
    var right_pobi = div_num(pobi[1])
    var right_crong = div_num(crong[1])
    // 3-1. 각 자릿수 배열에 대해 덧셈, 곱셈 후 큰 수 구하기 : cal_arr 함수 구현
    // 3-2. pobi,crong 각각 최종 큰 수 구하기(Math.max() 함수 사용)
    var bigger_pobi = Math.max(cal_arr(left_pobi),cal_arr(right_pobi))
    var bigger_crong = Math.max(cal_arr(left_crong),cal_arr(right_crong))
  }
  return answer;
}

module.exports = problem1;

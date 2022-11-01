
//합 func
function sum(num) {
  let num_sum = 0;
  do{
    num_sum += num%10;
    num = Math.floor(num/10);
  } while(num>0);

  return num_sum;
}

//곱 func
function multi(num) {
  let num_multi = 1;
  do{
    num_multi *= num%10;
    num = Math.floor(num/10);
  } while(num>0);
  return num_multi;
}

//main
function problem1(pobi, crong) {
  var answer = 0;

  //예외처리
  if (pobi[0] <= 1 || crong[0] <= 1) {
    return -1;
  } else if (pobi[0] >= 399 || crong[0] >= 399 ) {
    return -1;
  } else if (pobi[0]%2 != 1 || pobi[1]%2 !=0) {
    return -1;
  } else if (crong[0]%2 != 1 || crong[1]%2 !=0) {
    return -1;
  } else if (pobi[1] != pobi[0]+1 || crong[1] != crong[0]+1) {
    return -1;
  }

  //pobi 합&곱
  let pobi_left = pobi[0];
  let pobi_right = pobi[1];
  let pobi_left_sum = sum(pobi_left);
  let pobi_right_sum = sum(pobi_right);
  let pobi_left_multi = multi(pobi_left);
  let pobi_right_multi = multi(pobi_right);

  //crong 합&곱
  let crong_left = crong[0];
  let crong_right = crong[1];
  let crong_left_sum = sum(crong_left);
  let crong_right_sum = sum(crong_right);
  let crong_left_multi = multi(crong_left);
  let crong_right_multi = multi(crong_right);

  //가장 큰 값 구하기
  var pobi_max = Math.max(pobi_left_sum,pobi_left_multi,pobi_right_sum,pobi_right_multi);
  var crong_max = Math.max(crong_left_sum,crong_left_multi,crong_right_sum,crong_right_multi);

  //점수 조건
  if (pobi_max > crong_max) {
    answer = 1;
  } else if (crong_max > pobi_max) {
    answer = 2;
  } else if (crong_max === pobi_max) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;

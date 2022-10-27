function problem1(pobi, crong) {
  var answer;
  //포비 변수
  let p_left = [];
  let p_right = [];
  let p_sum1=0, p_sum2=0;
  let p_mul1=1, p_mul2=1;
  let p_result1=0, p_result2=0, p_result=0;
  //크롱 변수
  let c_left = [];
  let c_right = [];
  let c_sum1=0, c_sum2=0;
  let c_mul1=1, c_mul2=1;
  let c_result1=0, c_result2=0, c_result=0;

  //예외사항 : 왼쪽 페이지 +1과 오른쪽페이지가 다를 시 -1을 리턴하고 종료.
  if((pobi[0]+1) != pobi[1] || (crong[0]+1) != crong[1]){
    return -1;
  }
  
  for(let i=0; i<2; i++) {
    p_left.push(pobi[i].toString());
    p_right.push((pobi[i]+1).toString());
    c_left.push(crong[i].toString());
    c_right.push((crong[i]+1).toString());
  }

  //포비 
  for(let i=0; i<p_left[0].length; i++) {
    p_sum1 += parseInt(p_left[0][i])
    p_mul1 *= parseInt(p_left[0][i])
  }
  for(let i=0; i<p_right[0].length; i++) {
    p_sum2 += parseInt(p_right[0][i])
    p_mul2 *= parseInt(p_right[0][i])
  }

  //크롱
  for(let i=0; i<c_left[0].length; i++) {
    c_sum1 += parseInt(c_left[0][i])
    c_mul1 *= parseInt(c_left[0][i])
  }
  for(let i=0; i<c_right[0].length; i++) {
    c_sum2 += parseInt(c_right[0][i])
    c_mul2 *= parseInt(c_right[0][i])
  }

  p_result1 = p_sum1 >= p_mul1 ? p_sum1 : p_mul1;
  p_result2 = p_sum2 >= p_mul2 ? p_sum2 : p_mul2;
  p_result = p_result1 >= p_result2 ? p_result1 : p_result2

  c_result1 = c_sum1 >= c_mul1 ? c_sum1 : c_mul1;
  c_result2 = c_sum2 >= c_mul2 ? c_sum2 : c_mul2;
  c_result = c_result1 >= c_result2 ? c_result1 : c_result2
  

  if(p_result > c_result) answer=1
  else if(p_result == c_result) answer =0
  else if(p_result < c_result) answer=2
  return answer;
}

module.exports = problem1;
const is_tsn = (digit) => {
  if (digit === 3 || digit === 6 || digit === 9){
    return 1
  } else {
    return 0
  }
}

function problem3(number) {
  var answer = 0;
  var cnt = 1
  while (cnt <= number){
    temp_cnt = cnt
    while (temp_cnt >= 1){    
      temp_cnt = temp_cnt * 0.1
      temp_digit = Math.round(10*(temp_cnt - Math.floor(temp_cnt)), 0)
      console.log(temp_digit)
      answer += is_tsn(temp_digit) 
      temp_cnt = Math.floor(temp_cnt)
    }
    cnt += 1;
  }
    
  return answer;
}

module.exports = problem3;

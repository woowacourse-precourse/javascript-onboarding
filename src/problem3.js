const is_tsn = (digit) => {
  if ([3, 6, 9].includes(digit)){
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
      answer += is_tsn(temp_digit) 
      temp_cnt = Math.floor(temp_cnt)
    }
    cnt += 1;
  }
    
  return answer;
}

module.exports = problem3;

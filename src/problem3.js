function problem3(number) {
  let answer = 0;
  
  for(var i = 1; i < number+1; i++) {
    let str_num = String(i);

    // 두자리 수 이상일 때
    if(str_num.length > 1) {
      for(var j = 0; j < str_num ; j ++) {
        if(str_num.charAt(j) === '3' || str_num.charAt(j) === '6' || str_num.charAt(j) === '9') {
          answer = answer + 1;
        }
      }
    } else{ // 한자리 수 일 때
      if(str_num.charAt(str_num.length-1) === '3' || str_num.charAt(str_num.length-1) === '6' || str_num.charAt(str_num.length-1) === '9') {
        answer = answer + 1;  
      }
    }
  }
  
  return answer;
}

module.exports = problem3;

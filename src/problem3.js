function problem3(number) {
  var answer = 0;

  if (vaild(number)) {
    for(var i = 1; i <= number; i++) {
      answer += (String(i).match(/3/g) || []).length;
      answer += (String(i).match(/6/g) || []).length;
      answer += (String(i).match(/9/g) || []).length;
    }
  }
  return answer;
}

/** number는 1 이상 10,000 이하인 자연수 확인하기 위한 함수*/
function vaild(number) {
  if (typeof number !== "number") {
    return false;
  } 
  if (number > 10000 || number < 1) {
    return false;
  }
  return true;
}


module.exports = problem3;

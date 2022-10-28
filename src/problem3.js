function problem3(number) {
  var answer = 0;
  
  for(var i = 1; i <= number; i++) {
    num = i.toString().split('');

    for(var n = 0; n <= num.length; n++) {
      if(num[n] === '3' || num[n]=== '6' || num[n] === '9') answer++;
    }
  }
  return answer;
}

module.exports = problem3;

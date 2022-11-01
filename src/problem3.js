function problem3(number) {
  var answer = 0;
  var regExp = /3|6|9/g;

  for(i = 1; i<=number; i++){
    if(String(i).includes(3)||String(i).includes(6)||String(i).includes(9)){ //3 또는 6또는 9를 포함하고 있을 때, (3, 6, 9)의 개수를 측정하여 더하여 준다.
      answer += String(i).match(regExp).length;
    }
  }
  return answer;
}

module.exports = problem3;

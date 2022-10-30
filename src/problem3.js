function problem3(number) {
  var answer;
  answer = 0;

  for(var i = 1 ; i <= number ; i++){
    var num = Array.from(String(i));
    for(var j = 0; j <= num.length-1 ; j++){
      if(num[j] == '3'){
        answer++;
      }
      if(num[j] == '6'){
        answer++;
      }
      if(num[j] == '9'){
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;

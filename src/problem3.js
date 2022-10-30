function counter(num){
  var answer = 0;
  while(num){
    if(num % 10 == 3 || num % 10 == 6 || num % 10 == 9) answer++;
    num = parseInt(num/10);
  }
  return answer;
}

function problem3(number) {
  var answer = 0;
  for(var i = 1; i <= number; i++){
    answer += counter(i);
  }
  return answer;
}

module.exports = problem3;

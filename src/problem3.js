function problem3(number) {
  var answer = 0;

  for(let i = number; i > 0; i--){
    for(let j = 0; j < String(i).length; j++){
      if(String(i)[j] == '3' || String(i)[j] == '6' || String(i)[j] == '9'){
        answer += 1;
      }
    }
  }

  return answer;
}

module.exports = problem3;

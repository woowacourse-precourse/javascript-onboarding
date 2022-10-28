console.log(problem3(13));
console.log(problem3(33));

function problem3(number) {
  // checkClap : 3, 6, 9가 들어가면 들어간 개수를 반환하는 함수
  var answer = 0;
  for(var i = 1; i<=number; i++){
    answer = answer + checkClap(i);
  }
  return answer;
}

function checkClap(number){
  var clapNum = 0;
  if(number.toString().includes('3')){
    clapNum = clapNum + number.toString().match(/3/g).length;
  }
  if(number.toString().includes('6')){
    clapNum = clapNum + number.toString().match(/6/g).length;
  }
  if(number.toString().includes('9')){
    clapNum = clapNum + number.toString().match(/9/g).length;
  }
  return clapNum;
}

module.exports = problem3;

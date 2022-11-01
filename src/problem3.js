function is369(number){
  if(number == '3' || number == '6' || number == '9') return true;
  return false;
}

function problem3(number) {
  let answer=0;
  for(let i = 1; i<=number; i++){
    for(let j = 0; j<i.toString().length; j++){
      if(is369(i.toString()[j])) answer++;
    }
  }
  return answer;
}

module.exports = problem3;

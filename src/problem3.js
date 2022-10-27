function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++){
    if(String(i).match(/3/g)?.length >= 1){
      answer += String(i).match(/3/g)?.length;
    }
    if(String(i).match(/6/g)?.length >= 1){
      answer += String(i).match(/6/g)?.length;
    }
    if(String(i).match(/9/g)?.length >= 1){
      answer += String(i).match(/9/g)?.length;
    }
  }

  return answer;
}

module.exports = problem3;

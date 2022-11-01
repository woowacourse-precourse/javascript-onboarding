function problem3(number) {
  var answer;
  var clap = 0;
  for(let i=0; i<=number; ++i){
    let num = i.toString();
    for(let j=0; j<num.length; ++j){
      if(num[j] == 3 || num[j] == 6 || num[j] == 9) clap++;
    }
  }
  answer = clap;

  return answer;
}

module.exports = problem3;

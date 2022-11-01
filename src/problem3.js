function problem3(number) {
  var answer=0;
  var num;

  for(let i=0; i<number; i++){
    num=String(i+1);
    for(let j =0; j<num.length; j++){
      if(num[j]=='3' || num[j]=='6' || num[j]=='9'){
        answer++
      }
    }
  }
  return answer;
}

module.exports = problem3;

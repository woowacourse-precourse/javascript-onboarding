function problem3(number) {
  var answer;
  
  for(let i=1;i<=number;i++){
    const str=number.charAt(i);
    for(let j=0;j<str.length;j++){
      if(str[i]==3){
        answer= answer+1;
      } else if(str[i]==6){
        answer=answer+1;
      } else if(str[i]==9){
        answer=answer+1;
      }
    }
  }
  return answer;
}

module.exports = problem3;

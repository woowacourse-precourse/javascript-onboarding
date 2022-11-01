function problem3(number) {
  let cnt=0;
  for(let i=1;i<=Number(number);i++){
    for(let j=0;j<i.toString().length;j++){
      if(i.toString()[j]==3||i.toString()[j]==6||i.toString()[j]==9){
        cnt++;
    }
  }
}
var answer=cnt;
return answer;
}
module.exports = problem3;

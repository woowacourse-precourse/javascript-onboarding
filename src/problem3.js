function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;

function count369(number){
  var answer=0;
  var x=0;
  while(number>0){
    x= number%10;
    if(x==3||x==6||x==9){
      answer++;
    }
    number=parseInt(number/10);
  }
  return answer;
}

console.log(count369(3639));

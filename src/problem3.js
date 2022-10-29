function problem3(number) {
  var answer;
  var answer=0;
  var x;
  for(i=1;i<=number;i++){
    j=i;
  while(j>0){
    x= j%10;
    if(x==3||x==6||x==9){
      answer++;
    }
    j=parseInt(j/10);
  }
}
  return answer;
}

module.exports = problem3;



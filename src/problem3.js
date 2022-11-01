function problem3(number) {
  var answer;
  let count=0;
  for(i=1;i<number+1;i++){
      let num = i;
      while (num>0){
          k=num%10;
          num=parseInt(num/10);
          if (k==3||k==6||k==9){
              count++;
          }
      }
  }
  answer=count;
  return answer;
}

module.exports = problem3;
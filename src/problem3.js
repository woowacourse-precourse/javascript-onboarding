function problem3(number) {
  var answer = 0;
  let num=0;
    for(let i=1;i<=number;i++){
        num=i;
        while(num!==0){
          if(num%10===3 || num%10===6 || num%10===9){
              answer++;
              num = Math.floor(num/10);
          }
          else{
              num = Math.floor(num/10);
          }
      }
}
  return answer;
}

module.exports = problem3;

function problem3(number) {
  var answer = clap(number);
  return answer;
}
function clap(number){
  let count = 0;
  let num;
  for(let i = 1;i<=number;i++){
    num = i;
    while(num!=0){
      if(num%10==3||num%10==6||num%10==9){
        count++;
      }
      num = Math.floor(num/10);
    }
  }
  return count;
}
module.exports = problem3;

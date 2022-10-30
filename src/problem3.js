function problem3(number) {
  var answer=0;
  for (let i=3;i<=number;i++){
    answer+=do369Exist(i);
  }
  
  return answer;
}

function do369Exist(num){
  var count=0;
  while(num>0){
    var digit=num%10;
    if (digit===3 || digit===6 || digit===9 ){
      count++;
    }
    num=parseInt(num/10);
  }
  return count;
}

console.log(problem3(33));
module.exports = problem3;

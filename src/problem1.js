function sum(num){
  var sumRes = 0;
  while(num > 0){
    sumRes += (num%10);
    num = Math.floor(num/10);
  }
  return sumRes;
}

function mul(num){
  var mulRes = 1;
  while(num > 0){
    mulRes *= (num%10);
    num = Math.floor(num/10);
  }
  return mulRes;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;

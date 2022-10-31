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

function pageCheck(left,right){
  if(left === 1 || right === 400){
    return false;
  }
  if(left < 3 || right > 398){
    return false;
  }
  if((left%2) !== 1 || (right%2) !== 0){
    return false;
  }
  if((right-left) !== 1){
    return false;
  }
  return true;
}


function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;

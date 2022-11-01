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

function maxNum(lsum,rsum,lmul,rmul){
  return Math.max(lsum,rsum,lmul,rmul);
}


function problem1(pobi, crong) {
  var answer;

  if(!pageCheck(pobi[0],pobi[1]) || !pageCheck(crong[0],crong[1])){
    return -1;
  }

  var pobiMax = maxNum(sum(pobi[0]),sum(pobi[1]),mul(pobi[0]),mul(pobi[1]));
  var crongMax = maxNum(sum(crong[0]),sum(crong[1]),mul(crong[0]),mul(crong[1]));
  
  if(pobiMax > crongMax){
    answer = 1;
  }
  else if(pobiMax < crongMax){
    answer = 2;
  }
  else{
    answer = 0;
  }

  return answer;
}

module.exports = problem1;

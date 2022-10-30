function problem1(pobi, crong) {
  var answer;
  let pobi_max=Math.max(
    Math.max(sumDigits(pobi[0]),mulDigits(pobi[0])),
    Math.max(sumDigits(pobi[1]),mulDigits(pobi[1])));

  let crong_max=Math.max(
    Math.max(sumDigits(crong[0]),mulDigits(crong[0])),
    Math.max(sumDigits(crong[1]),mulDigits(crong[1])));
  
  
  if (pobi[1]-pobi[0]!==1 || crong[1]-crong[0]!==1){
    answer=-1;
    return answer
  }

  if (pobi[0]===1 || crong[0]===1){
    answer=-1;
    return answer
  }

  if (pobi[1]===400 || crong[1]===1){
    answer=-1;
    return answer
  }

  if (pobi_max>crong_max){
    answer=1;
  }
  else if (pobi_max===crong_max){
    answer=0;
  }
  else{
    answer=-1
  }

  return answer;
}

function sumDigits(num){
  var sum=0;
  while(num>0){
    sum+=num%10;
    num=parseInt(num/10);
  }
  return sum
}


function mulDigits(num){
  var mul=1
  while(num>0){
    mul*=num%10;
    num=parseInt(num/10);
  }
  return mul
}

module.exports = problem1;

function problem1(pobi, crong) {
  //시작하는 면이나 끝나는 면은 예외처리 -1 반환
  //제한 길이가 2 이므로 99~102 범위는 4이므로 -1 반환
  const PobiCheck = pobi[1]-pobi[0];
  const CrongCheck = crong[1]-crong[0];
  if(PobiCheck>2 || CrongCheck>2){
    return -1;
  };
  if((pobi[0]===1 || pobi[1]===400) || (crong[0]===1 || pobi[1]===400)){
    return -1;
  };
  const MaxPobiNum = ()=>{
    const addpobi = addproblem1(pobi[0],pobi[1]);
    const mulpobi = mulproblem1(pobi[0],pobi[1]);
    
    if(addpobi>mulpobi){
      return addpobi;
    }
    else{
      return mulpobi;
    }
  }

  const MaxCrongiNum = ()=>{
    const addcrong = addproblem1(crong[0],crong[1]);
    const mulcrong = mulproblem1(crong[0],crong[1]);
    if(addcrong>mulcrong){
      return addcrong;
    }
    else{
      return mulcrong;
    }
  }
  console.log(MaxPobiNum());
  console.log(MaxCrongiNum());
  if(MaxPobiNum()>MaxCrongiNum()){
    return 1;
  }
  else if(MaxPobiNum<MaxCrongiNum){
    return 2;
  }
  else{
    return 0;
  }
}

function addproblem1(num1,num2){
  var sum1=0,sum2=0;
  while(num1>0){
    sum1 += num1%10;
    num1 = Math.floor(num1/10);
  };
  while(num2>0){
    sum2 += num2%10;
    num2 = Math.floor(num2/10);
  };

  if(sum1>sum2){
    return sum1;
  }
  else{
    return sum2;
  }
}

function mulproblem1(num1,num2){
  var mul1=1,mul2=1;
  while(num1!=0){
    mul1 *= num1%10;
    num1 = Math.floor(num1/10);
  }
  while(num2!=0){
    mul2 *= num2%10;
    num2 = Math.floor(num2/10);
  }
  if(mul1>mul2){
    return mul1;
  }
  else{
    return mul2;
  }
}


module.exports = problem1;

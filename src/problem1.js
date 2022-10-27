
function makePlus(pNum){
  if(pNum>=100){
    return parseInt((pNum/100)+parseInt((pNum%100,10)/10)+(pNum%10),10);
  }else if(pNum>=10){
    return parseInt((pNum/10)+(pNum%10),10);
  }else{
    return parseInt(pNum,10);
  }
};
function makeMul(mNum){
  if(mNum>=100){
   return parseInt(mNum/100,10) * parseInt(mNum%10,10) * parseInt(parseInt(mNum%100,10)/10,10);
  }else if(mNum>=10){
   return parseInt((mNum/10),10)*parseInt((mNum%10),10);
  }else{
    return parseInt(mNum,10);
  }
}
function MakeBiggest(num1,num2,num3,num4){
  if(num1>=num2 && num1>=num3 && num1>=num4){
    return num1;
  }else if(num2>=num1 && num2>=num3 && num2>=num4){
    return num2;
  }else if(num3>=num1 && num3>=num2 && num3>=num4){
    return num3;
  }else if(num4>=num1 && num4>=num2 && num4>=num3){
    return num4;
  }
}
function MakeFilter(n1, n2) {
  if (n2 - n1 === 1) {
    if (n1 % 2 === 1) {
      if (n2 % 2 === 0) {
        if (n1 !== 1 && n2 !== 400) {
              return true;
            }else {return false;} 
      }else{return false;}
    } else {
      return false;
    }
  }else{return false;}
}
function problem1(pobi, crong) {
  var answer;
  let pPobi1 = makePlus(pobi[0]);
  let mPobi1 = makeMul(pobi[0]);
  let pPobi2 = makePlus(pobi[1]);
  let mPobi2 = makeMul(pobi[1]); 
  let aPobi;
  let cPobi = MakeFilter(pobi[0],pobi[1]);
  let pCrong1 = makePlus(crong[0]);
  let mCrong1 = makeMul(crong[0]);
  let pCrong2 = makePlus(crong[1]);
  let mCrong2 = makeMul(crong[1]);
  let aCrong;
  let cCrong = MakeFilter(crong[0],crong[1]);

  if(cPobi){
    if(cCrong){
      aPobi = MakeBiggest(pPobi1,pPobi2,mPobi1,mPobi2);
      aCrong = MakeBiggest(pCrong1,pCrong2,mCrong1,mCrong2);
      if(aPobi>aCrong){
        answer = 1;
      }else if(aPobi === aCrong){
        answer = 0;
      }else if(aCrong>aPobi){
        answer = 2;
      }
    }else{answer=-1}
  }else{ answer = -1}

  return answer;
}

module.exports = problem1;

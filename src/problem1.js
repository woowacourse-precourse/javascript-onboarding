
function makePlus(pNum){
  if(pNum>=100){
    return parseInt((pNum/100)+((pNum%100)/10)+(pNum%10));
  }else if(pNum>=10){
    return parseInt((pNum/10)+(pNum%10));
  }else{
    return parseInt(pNum);
  }
};
function makeMul(mNum){
  if(mNum>=100){
   return parseInt(mNum/100) * parseInt(mNum%10) * parseInt(parseInt(mNum%100)/10);
  }else if(mNum>=10){
   return parseInt((mNum/10))*parseInt((mNum%10));
  }else{
    return parseInt(mNum);
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

function problem1(pobi, crong) {
  var answer;
  let pPobi1 = makePlus(pobi[0]);
  let mPobi1 = makeMul(pobi[0]);
  let pPobi2 = makePlus(pobi[1]);
  let mPobi2 = makeMul(pobi[1]); 
  let aPobi;

  let pCrong1 = makePlus(crong[0]);
  let mCrong1 = makeMul(crong[0]);
  let pCrong2 = makePlus(crong[1]);
  let mCrong2 = makeMul(crong[1]);
  let aCrong;

  if(pobi[1]-pobi[0]=== 1 && crong[1]-crong[0]=== 1){
      aPobi = MakeBiggest(pPobi1,pPobi2,mPobi1,mPobi2);
      aCrong = MakeBiggest(pCrong1,pCrong2,mCrong1,mCrong2);
      if(aPobi>aCrong){
        answer = 1;
      }else if(aPobi === aCrong){
        answer = 0;
      }else if(aCrong>aPobi){
        answer = 2;
      }
  }else{ answer = -1}

  return answer;
}

module.exports = problem1;

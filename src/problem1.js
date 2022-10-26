
function makePlus(pNum){
  if(pNum>=100){
    (pNum/100)*((pNum%100)/10)+(pNum%10);
  }else if(pNum>=10){
    (pNum/10)+(pNum%10);
  }else{
    return pNum;
  }
  return pNum;
};
function makeMul(mNum){
  if(mNum>=100){
    (mNum/100)*((mNum%100)/10)*(mNum%10);
  }else if(mNum>=10){
    (mNum/10)*(mNum%10);
  }else{
    return mNum;
  }
  return mNum;
}

function problem1(pobi, crong) {
  var answer;
  let pPobi1 = makePlus(pobi[0]);
  let pPobi2 = makePlus(pobi[1]);
  let mPobi1 = makeMul(pobi[0]);
  let mPobi2 = makeMul(pobi[1]); 
  
  let pCrong1 = makePlus(crong[0]);
  let pCrong2 = makePlus(crong[1]);
  let mCrong1 = makeMul(crong[0]);
  let mCrong2 = makeMul(crong[1]);
  return answer;
}

module.exports = problem1;

function problem1(pobi, crong) {
  let pobiLeftSum = 0;
  let pobiRightSum =0;
  let pobiLeftMulti = 1;
  let pobiRightMulti = 1;
  let crongLeftSum = 0;
  let crongRightSum = 0;
  let crongLeftMulti = 1;
  let crongRightMulti = 1;
  let pobiScore = [];
  let crongScore = [];
  let pobiStr =[];
  let crongStr = [];
  for(let i = 0; i<2; i++){
    pobiStr[i] = pobi[i].toString().split('').map(x=>parseInt(x));
    crongStr[i] = crong[i].toString().split('').map(x=>parseInt(x));
  }
  
  pobiLeftSum = pobiStr[0].reduce((acc,curr)=>acc+curr)
  pobiRightSum = pobiStr[1].reduce((acc,curr)=>acc+curr)
  pobiLeftMulti = pobiStr[0].reduce((acc,curr)=>acc*curr)
  pobiRightMulti = pobiStr[1].reduce((acc,curr)=>acc*curr)
  crongLeftSum = crongStr[0].reduce((acc,curr)=>acc+curr)
  crongRightSum = crongStr[1].reduce((acc,curr)=>acc+curr)
  crongLeftMulti = crongStr[0].reduce((acc,curr)=>acc*curr)
  crongRightMulti = crongStr[1].reduce((acc,curr)=>acc*curr)
  
  pobiScore = Math.max(pobiLeftSum,pobiLeftMulti,pobiRightMulti,pobiRightSum)
  crongScore = Math.max(crongLeftSum,crongLeftMulti,crongRightMulti,crongRightSum)
  
  if(parseInt(pobi[0])+1 != parseInt(pobi[1])){
    return -1
  }
  if(parseInt(crong[0]+1) != parseInt(crong[1])){
    return -1
  }
  if(pobiScore > crongScore){
    return 1
  }
  if(pobiScore < crongScore){
    return 2
  }
  if(pobiScore === crongScore){
    return 0
  }
}

module.exports = problem1;

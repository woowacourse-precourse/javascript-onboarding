function exception(pobi, crong){
  var ret=false;
  if(pobi[1]-pobi[0] != 1 || crong[1]-crong[0] != 1){
    ret=true;
  }
  return ret;
}
function score(person){
  var ret;
  var pL = person[0].toString();
  var pLAdd = 0; var pLMul = 1;
  var pR = person[1].toString();
  var pRAdd = 0; var pRMul = 1;
  for(var i=0; i<pL.length; i++){
    pLAdd += Number(pL[i]);
    pLMul *= Number(pL[i]);
  }
  for(var i=0; i<pR.length; i++){
    pRAdd += Number(pR[i]);
    pRMul *= Number(pR[i]);
  }
  ret= Math.max(Math.max(pLAdd,pLMul),Math.max(pRAdd,pRMul));
  return ret;
}
function compare(pobiScore, crongScore){
  var answer;
  if(pobiScore>crongScore){
    answer = 1;
  }else if(pobiScore<crongScore){
    answer = 2;
  }else{
    answer = 0;
  }
  return answer;
}
function problem1(pobi, crong) {
  var answer;
  //기능목록1: 예외처리
  if(exception(pobi, crong)){
    answer = -1;
  }else{
    //기능목록2: 포비, 크롱 점수 구하기
    var pobiScore = score(pobi);
    var crongScore = score(crong);

    //기능목록3: 승부 구하기
    answer = compare(pobiScore,crongScore);
    
  }
  
  return answer;
}

module.exports = problem1;

function exception(pobi, crong){
  var ret=false;
  if(pobi[1]-pobi[0] != 1 || crong[1]-crong[0] != 1){
    ret=true;
  }
  return ret;
}

function problem1(pobi, crong) {
  var answer;
  //기능목록1: 예외처리
  if(exception(pobi, crong)){
    answer = -1;
  }else{

  }
  
  return answer;
}

module.exports = problem1;

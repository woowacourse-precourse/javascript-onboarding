//전체 문자열에서 같은 문자가 중복되는 문자를 삭제



function problem2(cryptogram) {
  let cryptogramArray=[];
  //기능 1. 같은 문자가 연속되는 문자열이 있는지 탐색
  for(let i = 0; i<cryptogram.length;i++ ){
    if(cryptogram[cryptogramArray.length-1]){
      //기능 2. 만약 있다면 삭제하기
      cryptogramArray.replace(cryptogramArray[length-1],'');
    }
  }
  if(cryptogramArray.length === 0){
    var answer;
    answer = cryptogram;
    return answer;
  } 

}

module.exports = problem2;

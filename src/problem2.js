function dedup(cryptogram){
  var answer;
  var tmp=cryptogram;
  for(var i=0; i<tmp.length; i++){
    var idx;
    for(var j=0; j<tmp.length-1; j++){
      if(tmp[j]==tmp[j+1]){
        idx=j;
        break;
      }
    }
    tmp=tmp.substring(0,idx)+tmp.substring(idx+2,tmp.length);    
  }
  answer=tmp;
  for(var i=0; i<tmp.length-1; i++){
    if(tmp[i]==tmp[i+1]){
      answer="";
    }
  }
  return answer;
}
function problem2(cryptogram) {

  var answer;
  //기능목록1: 연속하는 중복문자 삭제
  answer=dedup(cryptogram);

  return answer;
}

module.exports = problem2;

/**중복있으면 지우는 함수 */
function check(cryptogram){
  for(i=0;i<cryptogram.length;i++){
      cryptogram = cryptogram.replace(cryptogram[i]+cryptogram[i],'');
  }
  return cryptogram
}

function problem2(cryptogram) {
  var answer ='';
  
  while(true){
    tmp = check(cryptogram)
    if(cryptogram === tmp || cryptogram === ''){//중복이 없으면 끝
      break;
    }else{//중복이 있는 경우 다시 확인
      cryptogram = tmp
    }
  }
  
  answer = cryptogram;
  
  return answer;
}

module.exports = problem2;

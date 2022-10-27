function problem2(cryptogram) {
  var answer;
  let nowCryptogram = cryptogram; //현재 암호문
  let nowLength = cryptogram.length; //현재 암호문의 길이

  while(true){
    let decryption = ''; //해독 결과
    for (var i=0; i<nowLength-1; i++){
      if(nowCryptogram[i] == nowCryptogram[i+1]){
        continue;
      }
      else if(nowCryptogram[i] == nowCryptogram[i-1]){ //중복 문자열의 마지막 문자 처리를 위해
        continue;
      }
      decryption += nowCryptogram[i];
    }

    //마지막 index 문자 확인
    if(nowCryptogram[nowLength-1] != nowCryptogram[nowLength-2]){
      decryption += nowCryptogram[nowLength-1];
    }

    //문자열이 바뀐 게 없다면 종료
    if(nowLength == decryption.length){
      answer = decryption;
      break;
    }
    
    nowCryptogram = decryption;
    nowLength = nowCryptogram.length;
  }

  return answer;
}

module.exports = problem2;

function problem2(cryptogram) {
  var answer;
  if(cryptogram.length == 1)
    return answer;
  while(true){
    let check = false;
    for(let i = 0 ; i < cryptogram.length-1; i++){
      if(cryptogram[i] == cryptogram[i+1]){ // 중복 문자가 연속되는 경우
        check = true;
        tmp = i+1;
        while(cryptogram[i] == cryptogram[tmp++]);
        // 문자열의 인덱스 i~tmp 까지 제거    
        cryptogram = cryptogram.slice(0,i) + cryptogram.slice(tmp-1);
        i--;
      }
    }
    if(check == false) // 연속된 중복 문자가 없는 경우 while문 종료
      break;   
  }
  answer = cryptogram
  return answer;
}

module.exports = problem2;

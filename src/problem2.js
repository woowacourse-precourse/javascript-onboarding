function problem2(cryptogram) {
  var answer;
  if(cryptogram.length == 1)
    return answer;
  
  for(let i = 0 ; i < cryptogram.length-1; i++){
    if(cryptogram[i] == cryptogram[i+1]){ // 중복 문자가 연속되는 경우      
      tmp = i+1;
      while(cryptogram[i] == cryptogram[tmp++]);
      // 문자열의 인덱스 i~tmp 까지 제거    
      cryptogram = cryptogram.slice(0,i) + cryptogram.slice(tmp-1);
      i--;
    }
  }
  answer = cryptogram
  return answer;
}

module.exports = problem2;

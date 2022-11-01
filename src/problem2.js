function problem2(cryptogram) {
  const cryptoArr = cryptogram.split('');

  // 문자열 문자 하나씩 검사
  for(let i=1;i<cryptoArr.length;i++){
    // 전 문자와 일치하는지 검사
    if(cryptoArr[i-1] === cryptoArr[i]){
      let cnt = 2;
      let nowIdx = i+1;

      while(true){
        // 현재 문자 뒤로 몇개가 일치하는지 체크
        if(cryptoArr[nowIdx-1] === cryptoArr[nowIdx++]) cnt++;
        else break;
      }

      //전 문자부터 일치하는 갯수만큼 배열 제거
      cryptoArr.splice(--i, cnt);
      i--;
    }
  }

  return cryptoArr.join(''); // 문자열로 반환
}

module.exports = problem2;

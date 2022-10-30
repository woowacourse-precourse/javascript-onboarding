function problem2(cryptogram) {
  let answer = cryptogram;
  
  while(true) {
      // a~z 가 두번 이상 반복되는 문자열을 전역 검색한다.
      let regExp = answer.match(/a{2,}|b{2,}|c{2,}|d{2,}|e{2,}|f{2,}|g{2,}|h{2,}|i{2,}|j{2,}|k{2,}|l{2,}|m{2,}|n{2,}|o{2,}|p{2,}|q{2,}|r{2,}|s{2,}|t{2,}|u{2,}|v{2,}|w{2,}|x{2,}|y{2,}|z{2,}/g);
      
      // 반복되는 문자열이 없으면 
      if(regExp === null) break;
      
      for(let i = 0; i < regExp.length; i++) {
          answer = answer.replace(regExp[i], "");
      }
  }

  // 예외처리, 예외사항이면 문자 그대로 출력
  if (cryptogram.length < 1 && cryptogram.length > 1000) answer = cryptogram;
  else if (cryptogram.match(/[a-z]/g).length === cryptogram.length) answer = cryptogram;
  
  return answer;
}

module.exports = problem2;
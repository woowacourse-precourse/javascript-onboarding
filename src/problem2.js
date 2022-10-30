function problem2(cryptogram) {
  let answer = cryptogram;
  
  while(true) {
      // a~z 가 두번 이상 반복되는 문자열을 전역 검색한다.
      let regExp = answer.match(/a{2,}|b{2,}|c{2,}|d{2,}|e{2,}|f{2,}|g{2,}|h{2,}|i{2,}|j{2,}|k{2,}|l{2,}|m{2,}|n{2,}|o{2,}|p{2,}|q{2,}|r{2,}|s{2,}|t{2,}|u{2,}|v{2,}|w{2,}|x{2,}|y{2,}|z{2,}/g);

  }
  
  return answer;
}

module.exports = problem2;
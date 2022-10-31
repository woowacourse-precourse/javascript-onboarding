function problem2(cryptogram) {
  let check = false;
  for (start = 0; start < cryptogram.length - 1; start++){
    if (cryptogram[start] == cryptogram[start+1]) {
      w = cryptogram[start];
      end = start + 1;
      // 붕복되는 문자열이 3개 이상인 경우
      for (e = start+2; e < cryptogram.length; e++){
        if (cryptogram[e] == w){
          end = e;
        } else if (cryptogram[e] != w){
          break;
        }
      } 
      check = true;
      return problem2(cryptogram.slice(0, start) + cryptogram.slice(end+1));
    }
  }
  if (!check) {
    return cryptogram
  }
}

console.log(problem2("browoanoommnaon")) // "brown"
console.log(problem2("zyelleyz")) // ""

module.exports = problem2;

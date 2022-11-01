// 기능 요구 사항
// - [o] 연속하는 중복 문자들을 (연속하는 중복 문자가 없을때까지)삭제한다.
// - ex1) "browoanoommnaon"
//   - 1. "browoanoommnaon"
//   - 2. "browoannaon"
//   - 3. "browoaaon"
//   - 4. "browoon"
//   - 5. "brown"
// - ex2) "zyelleyz"
//   - 1. "zyeeyz"
//   - 2. "zyyz"
//   - 3. "zz"
//   - 4. ""

function problem2(cryptogram) {
  while(true) {
    let isEnd = false;
    let start = -1;
    for(let i = 1; i <= cryptogram.length; i++) {
      if (i !== cryptogram.length && cryptogram[i-1] === cryptogram[i]) {
        if (start == -1) {
          start = i-1;
        }
        isEnd = true;
      } else if (start != -1) {
        let left = cryptogram.substring(0, start);
        let right = cryptogram.substring(i);
        cryptogram = left + right;
        i = start;
        start = -1;
      }
    }
    if (isEnd == false) {
      return cryptogram;
    }
  }
}

console.log(problem2("cbbbcccd"));
module.exports = problem2;

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
    for(let i = 1; i <= cryptogram.length; i++) {
      if (cryptogram[i-1] === cryptogram[i]) {
        let left = cryptogram.substring(0, i-1);
        let right = cryptogram.substring(i+1);
        cryptogram = left + right;
        isEnd = true;
      }
    }
    if (isEnd == false) {
      return cryptogram;
    }
  }
}

// console.log(problem2("browoanoommnaon"));
module.exports = problem2;

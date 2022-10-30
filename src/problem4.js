/* 
 * Features
 * 1. 문자열을 입력받는다
 * 2. 문자 단위로 값을 뒤집는다. (소문자 포함)
 * 3. 뒤집은 값 반환
 *  
 * Exceptions
 * 1. word 길이: 1~1000
 * 2. 알파벳 외 문자는 x
 */

// exception 1
const isOutOfRange = inputLength => !(inputLength >= 1 && inputLength <= 1000)

function problem4(word) {
  let answer = [];
  let criterion = "";

  if (isOutOfRange(word.length)) {
    throw "Input lenth error"
  }

  word.split("").map((char)=>{

    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 80) {
      criterion = "A";
    } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
      criterion = "a";
    } else {
      criterion = "";
    }

    if (criterion) {
      let charToOrder = char.charCodeAt() - criterion.charCodeAt(0);
      let orderToUnicode = 25 - charToOrder + criterion.charCodeAt(0);

      answer.push(String.fromCharCode(orderToUnicode));
    } else {
      answer.push(char);
    }
    
  })

	return answer.join("");
}

module.exports = problem4;

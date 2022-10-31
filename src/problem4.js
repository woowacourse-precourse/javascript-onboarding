//정렬뿐만 아니라 청개구리라서 역렬도 고려, 테스트 문장에 대소문자 섞여있음
function problem4(word) {
  let answer;
  let result = [];
  let astring = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let zstring = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";

  for (let value = 0; value <= word.length; value++) {
    let mark = astring.indexOf(word[value]);
    if (mark === -1) {
      result.push(word[value]);
    } else {
      result.push(zstring[mark]);
    }
  }
  answer = result.join("");
  return answer;
}

module.exports = problem4;

function problem4(word) {
  
  return answer;
}

// 입력받은 character를 변환하여 반환하는 함수
function convert(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
  const reverse =  "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba ";
  const i = alphabet.indexOf(str);
  return reverse.charAt(i);
}

module.exports = problem4;

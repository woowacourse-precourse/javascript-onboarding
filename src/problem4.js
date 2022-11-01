function problem4(word) {
  const answer = changeString(word);
  return answer;
}

// 문자를 한글자씩 잘라서 convert 함수에 넣어준 뒤 변환된 문자를 반환하는 함수
function changeString(word) {
  let convertStr = "";
  for(let i=0; i<word.length; i++) {
    convertStr += convert(word.charAt(i));
  }
  return convertStr;
}

// 입력받은 character를 변환하여 반환하는 함수
function convert(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
  const reverse =  "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba ";
  const i = alphabet.indexOf(str);
  return reverse.charAt(i);
}

module.exports = problem4;

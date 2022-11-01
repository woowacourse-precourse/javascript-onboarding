function problem4(word) {
  let answer = "";
  let splitWord = word.split("");
  splitWord.forEach((element, index) => {
    let ascii = word.charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      answer += String.fromCharCode(155 - ascii); // 대문자 65~90(155개)
    } else if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(219 - ascii); // 소문자 97~122(219개)
    } else {
      answer += element;
    }
  });
  return answer;
}

module.exports = problem4;

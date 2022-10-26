function problem4(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    let ascii = word.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) ascii = 65 + 90 - ascii;
    else if (ascii >= 97 && ascii <= 122) ascii = 97 + 122 - ascii;
    answer += String.fromCharCode(ascii);
  }
  return answer;
}
module.exports = problem4;

function problem4(word) {
  let answer = "";
  for (w of word) {
    const uniCode = w.charCodeAt(0);
    if (65 <= uniCode && uniCode <= 90) {
      answer += String.fromCharCode(155 - uniCode);
    } else if (97 <= uniCode && uniCode <= 122) {
      answer += String.fromCharCode(219 - uniCode);
    } else if (w === " ") {
      answer += " ";
    }
  }
  return answer;
}
module.exports = problem4;

/*
for 루프 돌면서
  65<=word[i].charCodeAt(0)<=90 이면
    변환 = fromCharCode(155-word[i].charCodeAt(0))
  97<=word[i].charCodeAt(0)<=122이면
    변환 = fromCharCode(219-word[i].charCodeAt(0))
*/

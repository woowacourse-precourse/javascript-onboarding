function problem4(word) {
  var answer = "";
  const wordArr = Array.from(word);
  wordArr.forEach((c) => {
    if(c.charCodeAt(0) >= 97) answer += String.fromCharCode(122-(c.charCodeAt(0)-97));
    else if(c.charCodeAt(0) < 90  && c.charCodeAt(0) >= 65){
      answer += String.fromCharCode(65-(c.charCodeAt(0)-90));
    }
    else answer += c;
  })
  return answer;
}
module.exports = problem4;

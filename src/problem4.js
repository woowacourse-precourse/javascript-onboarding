function problem4(word) {
  // ASCII 코드표로 알파벳 배열을 만들자.
  const upper = Array.from({length:26}, (_,i) => String.fromCharCode(65+i));
  const lower = Array.from({length:26}, (_,i) => String.fromCharCode(97+i));
  let result = ''
  
  for (let i = 0; i < word.length; i++) {
    const codePosition = word[i].charCodeAt();
    if (codePosition <= 90 && codePosition >= 65) {
      const index = upper.indexOf(word[i]);
      result += [...upper].reverse()[index];
    }
    else if (codePosition >= 97 && codePosition <= 122) {
      const index = lower.indexOf(word[i]);
      result += [...lower].reverse()[index];
    } else {
      result += word[i];
    }
  }
  return result;
}
module.exports = problem4;

function problem4(word) {
  const reverseChar = (char) => {
    const uniCode = char.charCodeAt();
    if (/[A-Z]/.test(char)) return String.fromCharCode(155 - uniCode);
    if (/[a-z]/.test(char)) return String.fromCharCode(219 - uniCode);
    else return char;
  };
  var answer;
  return answer;
}
module.exports = problem4;

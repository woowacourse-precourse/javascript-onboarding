function problem4(word) {
  let answer = '';
  const wordArr = word.split('');
  wordArr.forEach(el => {
    if(el === ' ') {
      answer += el;
    } else {
      answer += replaceAlphabet(el);
    }
  });
  return answer;
}
module.exports = problem4;


function replaceAlphabet(char) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const ascii = [25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1, -1, -3, -5, -7, -9, -11, -13, -15, -17, -19, -21, -23, -25];
  const charIndex = alphabet.indexOf(char.toUpperCase());
  const charAscii = char.charCodeAt(char[0]);
  return String.fromCharCode(charAscii + ascii[charIndex]);
}
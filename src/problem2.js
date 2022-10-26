function problem2(cryptogram) {
  let answer;
  if(cryptogram.length === 1) return cryptogram;
  answer = removeDuplicateLetter(cryptogram);
  return answer;
}

function removeDuplicateLetter(string) {
  string = string.split('');
  let result = '';
  string.forEach((letter, idx) => {
    if(letter !== string[idx + 1] && letter !== string[idx - 1]) result += letter;
  });
  if(result !== string.join('')) return removeDuplicateLetter(result);
  if(result === string.join('')) return result;
}

module.exports = problem2;

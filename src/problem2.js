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
    const previousLetter = string[idx - 1];
    const nextLetter = string[idx + 1];
    if(letter !== nextLetter && letter !== previousLetter) result += letter;
  });
  if(result !== string.join('')) return removeDuplicateLetter(result);
  if(result === string.join('')) return result;
}

module.exports = problem2;

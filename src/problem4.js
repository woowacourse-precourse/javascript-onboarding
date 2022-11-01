function problem4(word) {
  var answer = '';
  let targetWord = '';
  const askiiACode = 'A'.charCodeAt();
  const askiiZCode = 'Z'.charCodeAt();

  for (let i = 0; i < word.length; i++) {
    targetWord = word[i].charCodeAt();
    if (targetWord >= askiiACode && targetWord <= askiiZCode) {
      targetWord = askiiZCode - (targetWord - askiiACode);
    }
    answer += String.fromCharCode(targetWord);
  }

  return answer;
}

module.exports = problem4;

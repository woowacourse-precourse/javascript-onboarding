function problem4(word) {
  var answer = '';
  let targetWord = '';
  const askiiACode = 'A'.charCodeAt();
  const askiiZCode = 'Z'.charCodeAt();
  const askiiaCode = 'a'.charCodeAt();
  const askiizCode = 'z'.charCodeAt();

  for (let i = 0; i < word.length; i++) {
    targetWord = word[i].charCodeAt();
    if (targetWord >= askiiACode && targetWord <= askiiZCode) {
      targetWord = askiiZCode - (targetWord - askiiACode);
    }
    else if (targetWord >= askiiaCode && targetWord <= askiizCode) {
      targetWord = askiizCode - (targetWord - askiiaCode);
    }
    answer += String.fromCharCode(targetWord);
  }

  return answer;
}

module.exports = problem4;

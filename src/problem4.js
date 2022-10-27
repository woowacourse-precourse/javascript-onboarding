function problem4(word) {
  let answer = word.split('');
  for (let i = 0; i < word.length; i++){
    if (answer[i] >= 'A' && answer[i] <= 'Z'){
      const convertWord = 90 - (answer[i].charCodeAt(0) - 65);
      answer[i] = String.fromCharCode(convertWord);
    } else if (answer[i] >= 'a' && answer[i] <= 'z'){
      const convertWord = 122 - (answer[i].charCodeAt(0) - 97);
      answer[i] = String.fromCharCode(convertWord);
    }
  }
  answer = answer.join('');

  return answer;
}

module.exports = problem4;

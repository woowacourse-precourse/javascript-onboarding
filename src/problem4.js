function problem4(word) {
  let answer = word.split('');
  for (let i = 0; i < word.length; i++){
    if (answer[i] >= 'A' && answer[i] <= 'Z'){
    } else if (answer[i] >= 'a' && answer[i] <= 'z'){
    }
  }
  answer = answer.join('');

  return answer;
}

module.exports = problem4;

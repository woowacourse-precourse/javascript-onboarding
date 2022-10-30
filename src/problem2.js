function problem2(cryptogram) {
  var word = [...cryptogram]
  var answer = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === answer[answer.length - 1]) {
      answer.pop()
    } else {
      answer.push(word[i])
    }
  }
  return answer.join('')
}

module.exports = problem2;
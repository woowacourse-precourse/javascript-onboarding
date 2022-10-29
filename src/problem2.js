function problem2(cryptogram) {
  var answer;
  let word = [];
  let trash = [];

  for (let i = 0; i < cryptogram.length; i++) {
    if (word[word.length - 1] === cryptogram[i]) {
      word.pop()
      trash.push(cryptogram[i])
    } else {
      word.push(cryptogram[i])
      console.log(word)
    }
    
  }
  answer = word.join('');
  return answer;
}

module.exports = problem2;
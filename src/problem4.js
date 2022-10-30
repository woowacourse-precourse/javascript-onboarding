function problem4(word) {
  let answer = ''

  console.log('this is problem 4')
  alpha = []
  for ( let i = 97 ; i < 123 ; i ++) {
    alpha.push(String.fromCharCode(i))
  }
  reversedAlpha = []
  for ( let k = 122 ; k > 96; k --) {
    reversedAlpha.push(String.fromCharCode(k))
  }

  for (let j = 0 ; j < word.length; j++) {
    if ( word[j] === word[j].toUpperCase() && word[j] !== ' ') {
      target = alpha.indexOf(word[j].toLowerCase())
      answer += reversedAlpha[target].toUpperCase()
    } else if ( word[j] !== ' ') {
      target = alpha.indexOf(word[j])
      answer += reversedAlpha[target]
    } else {
      answer += ' '
    }
  }

  return answer;
}

module.exports = problem4;

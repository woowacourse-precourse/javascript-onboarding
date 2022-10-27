function problem4(word) {
  let lower = []
  let upper = []
  let answer = []
  for (let i = 97; i <= 122; i++) lower.push(String.fromCharCode(i))
  for (let i = 65; i <= 90; i++) upper.push(String.fromCharCode(i))
  const ALPHASIZE = lower.length
  for(let i=0; i<word.length; i++) {
      if(word[i] ==' ') answer.push(' ')

      if(lower.includes(word[i])) {
          answer.push(lower[ALPHASIZE - lower.indexOf(word[i]) - 1])
      }

      if(upper.includes(word[i])) {
          answer.push(upper[ALPHASIZE - upper.indexOf(word[i]) - 1])
      }
  }
  return answer.join('')
}

module.exports = problem4;

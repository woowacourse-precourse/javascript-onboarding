function problem4(word) {
  let answer = ''
  word.split('').forEach((element) => {
    if (element === ' ') {
      answer += ' '
    } else {
      const upperElement = element.toUpperCase()
      if (element === upperElement) {
        answer += String.fromCharCode(90 - (element.charCodeAt(0) - 65))
      } else {
        answer += String.fromCharCode(122 - (element.charCodeAt(0) - 97))
      }
    }
  })
  return answer;
}

module.exports = problem4;

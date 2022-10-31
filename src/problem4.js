function problem4(word) {
  let answer = []

  for (let a of word) {
    const codeNum = a.charCodeAt(0)

    // 해당 문자가 대문자인 경우
    if (codeNum >= 65 && codeNum <= 90) {
      answer.push(155 - codeNum)
    } else if (codeNum >= 97 && codeNum <= 122) {
      answer.push(219 - codeNum)
    } else {
      answer.push(codeNum)
    }
  }

  return String.fromCharCode(...answer)
}

module.exports = problem4

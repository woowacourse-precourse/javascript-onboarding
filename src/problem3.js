function problem3(number) {
  const allNum = Array.from({ length: number }, (_, i) => i + 1).join("")
  const answer = allNum.match(/[369]/g)
  return answer ? allNum.match(/[369]/g).length : 0
}

module.exports = problem3

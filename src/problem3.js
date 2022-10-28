function problem3(number) {
  let answer = 0

  for (let i = 1; i <= number; i++) {
    const now = String(i).split('')
    now.forEach((element) => {
      if (element === '3' || element === '6' || element === '9') {
        answer += 1
      }
    })
  }
  
  return answer;
}

module.exports = problem3;

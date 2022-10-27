function problem3(number) {
  let answer = 0

  for (let i = 1; i <= number; i++) {
    i = i.toString()
    for (let j = 0; j < i.length; j++) {
      if (i[j] === '3' || i[j] === '6' || i[j] === '9') answer+=1
    }
  }
  return answer
}

module.exports = problem3;

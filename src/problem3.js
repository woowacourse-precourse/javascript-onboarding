function problem3(number) {
  let answer = 0

  for (let i = 1; i <= number; i++) {
    let count = 0
    const num = i.toString()
    for (let j = 0; j < num.length; j++) {
      if (num[j] === "3" || num[j] === "6" || num[j] === "9") count++
    }
    answer += count
  }

  return answer
}

problem3(13)

module.exports = problem3

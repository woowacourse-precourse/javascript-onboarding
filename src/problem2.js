function problem2(cryptogram) {
  let answer = cryptogram
  while (true) {
    const arr = answer.split('')
    let newAnswer = ''
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length) {
        continue
      } else {
        if (arr[i] !== arr[i+1]) {
          newAnswer += arr[i]
        } else if (arr[i] === arr[i+1]) {
          cnt += 1
          i = i+1
        }
      }
    }
    answer = newAnswer
    if (cnt === 0) {
      break
    }
  }
  return answer
}

module.exports = problem2;

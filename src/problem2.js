function problem2(cryptogram) {
  let answer = deleteRepeated(cryptogram)
  while (true) {
    prev_answer = answer
    answer = deleteRepeated(answer)
    if (answer == prev_answer) {
      break
    }
  }
  return answer;
}

function deleteRepeated(string) {
  return string.replace(/([a-z])\1+/g, '')
}
module.exports = problem2;

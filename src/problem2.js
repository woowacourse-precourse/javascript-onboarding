function problem2(cryptogram) {
  let origin = cryptogram
  let answer = cryptogram

  while (true) {
    origin = cryptogramCheck(origin)

    if (answer === origin) break
    else {
      answer = origin
    }
  }

  return answer
}

module.exports = problem2

function cryptogramCheck(value) {
  let arr = []
  let prev
  for (let a of value) {
    if (prev === a) {
      arr.pop()
    } else {
      arr.push(a)
      prev = a
    }
  }

  return arr.join("")
}

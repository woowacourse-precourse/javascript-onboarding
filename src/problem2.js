function problem2(cryptogram) {
  let arr = []

  cryptogram.split("").reduce((prev, curr) => {
    if (prev === curr) {
      arr.pop()
      return arr.at(-1)
    } else {
      arr.push(curr)
      return curr
    }
  }, "")

  return arr.join("")
}

module.exports = problem2

function problem2(cryptogram) {
  const stack = []

  let lastPoppedChar = ""

  Array.from(cryptogram).forEach((char) => {
    if (stack[stack.length - 1] === char) lastPoppedChar = stack.pop()
    else if (stack.length === 0 && lastPoppedChar !== char) stack.push(char)
    else if (lastPoppedChar !== char) stack.push(char)
  })
  return stack.join("")
}

module.exports = problem2

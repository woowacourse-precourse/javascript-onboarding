function problem2(cryptogram) {
  const charStack = new Array(cryptogram[0])

  for (let charIndex = 1; charIndex < cryptogram.length; charIndex++) {
    if (charStack[charStack.length - 1] === cryptogram[charIndex]) {
      charStack.pop()
    }
    else {
      charStack.push(cryptogram[charIndex])
    }
  }
  return charStack.join("")
}

module.exports = problem2;

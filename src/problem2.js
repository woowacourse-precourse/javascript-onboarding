function problem2(cryptogram) {
  let stack = new Array(cryptogram[0])

  for (let i = 1; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === cryptogram[i]) stack.pop()
    else stack.push(cryptogram[i])
  }
  
  return stack.join("")
}

module.exports = problem2;

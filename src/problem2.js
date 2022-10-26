function problem2(cryptogram) {
  let stringStack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    if (stringStack[stringStack.length - 1] === cryptogram[i])
      stringStack.pop();
    else stringStack.push(cryptogram[i]);
  }
  return stringStack.join("");
}

module.exports = problem2;

function problem2(cryptogram) {
  const stack = [];

  for(let i = 0; i < cryptogram.length; i++) {
    const letter = cryptogram[i];

    if(stack.length === 0) {
      stack.push(letter);
      continue;
    }

    if(stack[stack.length-1] === letter) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  return stack.length === 0 ? "" : stack.join("");
}

module.exports = problem2;

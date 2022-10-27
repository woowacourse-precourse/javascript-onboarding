function problem2(cryptogram) {
  const stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    const currElem = cryptogram[i];

    if (stack[stack.length - 1] === currElem) {
      stack.pop();
      continue;
    }
    stack.push(currElem);
  }

  return stack.join('');
}

module.exports = problem2;

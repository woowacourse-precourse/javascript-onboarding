function problem2(cryptogram) {
  let answer = "";
  let stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    const top = stack[stack.length - 1];
    if (top !== cryptogram[i]) {
      stack.push(cryptogram[i]);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
}

module.exports = problem2;

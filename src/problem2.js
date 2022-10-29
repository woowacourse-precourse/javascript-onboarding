function problem2(cryptogram) {
  let array = cryptogram.split("");
  let stack = [];

  for (const el of array) {
    if (el === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(el);
    }
  }

  return;
}

module.exports = problem2;

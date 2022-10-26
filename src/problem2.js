function problem2(cryptogram) {
  let stack = [];
  let flag = false;

  for (let i = 0; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === cryptogram[i]) {
      flag = true;
      continue;
    }

    if (flag) {
      stack.splice(-1, 1);
      flag = false;
      i--;
      continue;
    }

    stack.push(cryptogram[i]);
  }

  if (flag) {
    stack.splice(-1, 1);
  }

  return stack.join('');
}

module.exports = problem2;
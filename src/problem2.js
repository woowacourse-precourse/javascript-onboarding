function problem2(cryptogram) {
  let stack = [];
  let isRepeated = false; 

  for (let i = 0; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === cryptogram[i]) {
      isRepeated = true;
      continue;
    }

    if (isRepeated) {
      stack.splice(-1, 1);
      isRepeated = false;
      i--;
      continue;
    }

    stack.push(cryptogram[i]);
  }

  if (isRepeated) {
    stack.splice(-1, 1);
  }

  return stack.join('');
}

module.exports = problem2;
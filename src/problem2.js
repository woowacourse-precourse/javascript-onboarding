function shouldPush(stack, cryp, idx) {
  if (stack.length < 1 || stack[stack.length - 1] !== cryp[idx]) {
    return true;
  }
  return false;
}

function getNextIdx(lastElement, cryp, idx) {
  let j = 0;
  while (lastElement === cryp[idx + j]) {
    j += 1;
  }
  if (j > 0) {
    idx += j - 1;
  }
  return idx;
}

function problem2(cryptogram) {
  const stack = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (shouldPush(stack, cryptogram, i)) {
      stack.push(cryptogram[i]);
    } else {
      const lastElement = stack[stack.length - 1];
      i = getNextIdx(lastElement, cryptogram, i);
      stack.pop();
    }
  }
  return stack.join('');
}

module.exports = problem2;

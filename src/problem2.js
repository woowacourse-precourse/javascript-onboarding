function shouldPush(stack, cryp, idx) {
  if (stack.length < 1 || stack[stack.length - 1] !== cryp[idx]) {
    return true;
  }
  return false;
}

function problem2(cryptogram) {
  const stack = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (shouldPush(stack, cryptogram, i)) {
      stack.push(cryptogram[i]);
    } else {
    }
  }
  return stack.join('');
}

module.exports = problem2;

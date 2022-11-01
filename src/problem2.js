function problem2(cryptogram) {
  var answer;
  const stack = [];
  let stackLen = 1;
  stack.push(cryptogram[0]);

  for (let idx = 1; idx < cryptogram.length; idx++) {
    if (stackLen === 0) stack[stackLen] = cryptogram[idx];
    else if (stack[stackLen - 1] === cryptogram[idx])
      stack[--stackLen] = undefined;
    else stack[stackLen++] = cryptogram[idx];
  }

  answer = stack.join("");

  return answer;
}

module.exports = problem2;

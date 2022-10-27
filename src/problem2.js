function problem2(cryptogram) {
  if (cryptogram.length === 1) return cryptogram;
  let answer;
  let stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    let stackChar = stack[stack.length - 1];
    let cryptogramChar = cryptogram[i];

    if (stackChar === cryptogramChar) {
      stack.pop();
    }
    if (stackChar !== cryptogramChar) {
      stack.push(cryptogramChar);
    }
  }

  answer = stack.join('');
  return answer;
}


module.exports = problem2;
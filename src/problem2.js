function problem2(cryptogram) {
  var answer;

  let stack = [];
  let cryptogramAlphabet = cryptogram.split('');

  cryptogramAlphabet.forEach((v, i) => {
    if (stack.length < 1) {
      stack.push(v);
    } else {
      if (v === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(v);
      }
    }
  });

  answer = stack.join('');
  return answer;
}

module.exports = problem2;

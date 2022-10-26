function problem2(cryptogram) {
  const answer = removeDuplication(cryptogram);
  return answer;
}

function removeDuplication(cryptogram) {
  const stack = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (!stack.length || cryptogram[i] !== stack[stack.length - 1]) {
      stack.push(cryptogram[i]);
    } else if (stack.length && cryptogram[i] === stack[stack.length - 1]) {
      stack.pop();
    }
  }
  return stack.join('');
}

module.exports = problem2;

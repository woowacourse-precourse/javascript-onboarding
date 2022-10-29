const checkValid = (cryptogram) => {
  if (typeof cryptogram !== 'string') return true;
  if (cryptogram.length < 1 || cryptogram.length > 1000) return true;
  if (cryptogram !== cryptogram.toLowerCase()) return true;
  return false;
};

function problem2(cryptogram) {
  if (checkValid(cryptogram)) return false;

  const stack = [];
  stack.push(cryptogram[0]);

  for (let i = 1; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === cryptogram[i]) {
      stack.pop();
      continue;
    }
    stack.push(cryptogram[i]);
  }
  return stack.join('');
}

module.exports = problem2;

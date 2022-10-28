function problem2(cryptogram) {
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

console.log(problem2('browoanoommnaon'));
console.log(problem2('zyelleyz'));

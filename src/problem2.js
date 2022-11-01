function problem2(cryptogram) {
  const stack = [];
  let popped = "";
  stack.push(cryptogram[0]);

  for (let i = 1; i < cryptogram.length; i++) {
    if (stack.at(-1) === cryptogram[i]) popped = stack.pop();
    else if (popped === cryptogram[i]) continue;
    else stack.push(cryptogram[i]);
  }

  return stack.join("");
}
module.exports = problem2;

function problem2(cryptogram) {
  const stack = [];
  let removed = "";
  cryptogram = Array.from(cryptogram);
  for (let i = 0; i < cryptogram.length; i++) {
    let current = cryptogram[i];
    if (current === stack[stack.length - 1]) {
      stack.pop();
      removed = current;
    }
    if (removed !== current) {
      stack.push(current);
      removed = "";
    }
  }
  return stack.join("");
}
module.exports = problem2;

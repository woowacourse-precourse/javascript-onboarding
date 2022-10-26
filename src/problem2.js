function problem2(cryptogram) {
  const str = cryptogram.toString().split("");
  const stack = [];
  let duplicatedChar = "";

  str.forEach((cur, i) => {
    if (duplicatedChar === cur) return;
    else if (i === 0 || stack[stack.length - 1] !== cur) stack.push(cur);
    else if (stack[stack.length - 1] === cur) {
      duplicatedChar = stack.pop();
    }
  });

  return stack.join("");
}

module.exports = problem2;

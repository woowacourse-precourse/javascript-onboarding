function problem2(cryptogram) {
  const stack = [];
  let standard = "";

  for (const s of cryptogram) {
    if (standard === s) {
      continue;
    } else if (stack[stack.length - 1] !== s) {
      stack.push(s);
      standard = "";
    } else standard = stack.pop();
  }

  return stack.join("");
}

module.exports = problem2;

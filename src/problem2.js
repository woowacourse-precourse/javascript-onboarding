function problem2(cryptogram) {
  let stack = [];
  let duplicated = "";
  for (let i of cryptogram) {
    if (duplicated === i) {
      continue;
    } else if (stack[stack.length - 1] === i) {
      duplicated = stack.pop();
    } else {
      stack.push(i);
    }
    if (duplicated !== i) {
      duplicated = "";
    }
  }
  return stack.join("");
}

module.exports = problem2;

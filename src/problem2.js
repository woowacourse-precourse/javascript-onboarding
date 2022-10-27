function problem2(cryptogram) {
  let strArr = cryptogram.split("");

  let stack = [];

  strArr.forEach((str) => {
    if (!stack.length) {
      stack.push(str);
    } else {
      if (stack[stack.length - 1] === str) {
        flag = true;
        stack.pop();
      } else {
        stack.push(str);
      }
    }
  });

  return stack.join("");
}

module.exports = problem2;

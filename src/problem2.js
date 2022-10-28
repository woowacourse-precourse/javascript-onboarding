function problem2(cryptogram) {
  let arr = cryptogram.split("");
  const stack = [];
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
      continue;
    }
    if (stack[stack.length - 1] === arr[i]) {
      flag = true;
    } else {
      if (flag) {
        stack.pop();
        if (stack[stack.length - 1] !== arr[i]) {
          flag = false;
          stack.push(arr[i]);
        }
      } else {
        stack.push(arr[i]);
      }
    }
    if (i === arr.length - 1 && flag) {
      stack.pop();
    }
  }
  return stack.join("");
}

module.exports = problem2;

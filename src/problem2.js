function problem2(cryptogram) {
  let target = cryptogram;
  while (true) {
    stack = [target[0]];
    let flag = false;
    for (let i = 1; i < target.length; i++) {
      const top = stack[stack.length - 1];
      if (top !== target[i]) {
        if (!flag) stack.push(target[i]);
        else {
          stack.pop();
          stack.push(target[i]);
          flag = false;
        }
      } else {
        flag = true;
      }
    }
    if (flag) {
      stack.pop();
    }
    const newStr = stack.join("");
    if (target == newStr) {
      return target;
    }
    target = newStr;
  }
}

module.exports = problem2;

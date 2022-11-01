function problem2(cryptogram) {
  let answer;

  const cryptogramArr = cryptogram.split("");
  const stack = [cryptogramArr[0]];
  let flag = false;

  for (let i = 1; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === cryptogramArr[i]) {
      flag = true;
    } else {
      if (flag === true) {
        stack.pop();
        flag = false;
      }
      stack.push(cryptogramArr[i]);
    }
  }

  answer = stack.join("");

  return answer;
}

module.exports = problem2;

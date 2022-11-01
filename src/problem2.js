function problem2(cryptogram) {
  let answer;

  const cryptogramArr = cryptogram.split("");
  const stack = [cryptogramArr[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === cryptogramArr[i]) stack.pop();
    else stack.push(cryptogramArr[i]);
  }

  answer = stack.join("");

  return answer;
}

module.exports = problem2;

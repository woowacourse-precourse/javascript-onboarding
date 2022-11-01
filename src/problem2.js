function problem2(cryptogram) {
  let answer;

  const arr = cryptogram.split("");
  const stack = [arr[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === arr[i]) stack.pop();
    else stack.push(arr[i]);
  }

  answer = stack.join("");

  return answer;
}

module.exports = problem2;

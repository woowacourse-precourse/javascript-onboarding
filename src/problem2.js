function problem2(cryptogram) {
  let answer;

  let arr = cryptogram.split("");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length == 0) {
      stack.push(arr[i]);
    } else {
      if (stack[stack.length - 1] == arr[i]) {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    }
  }

  answer = stack.join("");

  return answer;
}

module.exports = problem2;
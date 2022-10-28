function problem2(cryptogram) {
  var answer;
  return answer;
}
function decryption(cryptogram) {
  let index = 0;
  const stack = [];
  while (index < cryptogram.length) {
    if (!stack) stack.push(cryptogram[index]);
    else {
      if (stack[stack.length - 1] == cryptogram[index]) {
        stack.pop();
      } else {
        stack.push(cryptogram[index]);
      }
    }
    index++;
  }
}
module.exports = problem2;

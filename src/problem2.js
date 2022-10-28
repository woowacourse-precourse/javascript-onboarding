function problem2(cryptogram) {
  var answer = decryption(cryptogram);
  return answer;
}
function decryption(cryptogram) {
  let index = 0;
  const stack = [];
  while (index < cryptogram.length) {
    if (!stack) stack.push(cryptogram[index]);
    else {
      if (stack[stack.length - 1] == cryptogram[index]) {
        index = progressIndex(cryptogram, index, cryptogram[index]) - 1;
        stack.pop();
      } else {
        stack.push(cryptogram[index]);
      }
    }
    index++;
  }
  return getString(stack);
}
function progressIndex(cryptogram, index, targetChar) {
  while (cryptogram[index] == targetChar) index++;
  return index;
}
function getString(Array) {
  return Array.join("");
}
module.exports = problem2;

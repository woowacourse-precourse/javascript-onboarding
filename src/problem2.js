function problem2(cryptogram) {
  return strCompress(cryptogram);
}

function strCompress(cryptogram) {
  let stack = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] === cryptogram[i]) stack.pop();
    else stack.push(cryptogram[i]);
  }
  return stack.join('');

}

module.exports = problem2;

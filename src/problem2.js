function problem2(cryptogram) {
  var stack = [];
  stack.push(cryptogram.charAt(0));

  return stack.join("");
}

module.exports = problem2;

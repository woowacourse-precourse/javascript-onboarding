function problem2(cryptogram) {
  var stack = [];
  stack.push(cryptogram.charAt(0));

  var cryptogramLastIndex = cryptogram.length - 1;

  for (var i = 1; i < cryptogram.length; i++) {
    var stackTop = stack.length - 1;

    if (cryptogram.charAt(i) === stack[stackTop]) {
      while (
        i <= cryptogramLastIndex &&
        cryptogram.charAt(i + 1) === stack[stackTop]
      ) {
        i++;
      }

      stack.pop();
      continue;
    }

    stack.push(cryptogram.charAt(i));
  }

  return stack.join("");
}

module.exports = problem2;

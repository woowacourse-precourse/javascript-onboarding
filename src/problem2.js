function problem2(cryptogram) {
  var stack = [];
  stack.push(cryptogram.charAt(0));

  var cryptogramLastIndex = cryptogram.length - 1;

  for (var i = 1; i < cryptogram.length; i++) {
    var stackTop = stack.length - 1;

    if (cryptogram.charAt(i) !== stack[stackTop]) {
      stack.push(cryptogram.charAt(i));
      continue;
    }

    while (
      i <= cryptogramLastIndex &&
      cryptogram.charAt(i + 1) === stack[stackTop]
    ) {
      i++;
    }

    stack.pop();
  }

  return stack.join("");
}

module.exports = problem2;

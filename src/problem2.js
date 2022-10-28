function problem2(cryptogram) {
  let stack = [];
  let splitted = [...cryptogram];

  splitted.forEach((spl) => {
    if (stack.length < 1) stack.push(spl);
    else if (spl === stack[stack.length - 1]) stack.pop();
    else stack.push(spl);
  });

  return stack.join('');
}
module.exports = problem2;

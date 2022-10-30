function problem2(cryptogram) {
  if (!checkException(cryptogram)) return;
  return delDup(cryptogram);
}

function checkException(str) {
  const x = str.length >= 1 && str.length <= 1000;
  const y = str.toLowerCase() === str;
  return x && y;
}
function isDup(stack, c) {
  if (c === stack[stack.length - 1]) return true;
  return false;
}
function delDup(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (!isDup(stack, str[i]) || i === 0) stack.push(str[i]);
    else stack.pop();
  }
  console.log(stack);
  return stack.join("");
}
module.exports = problem2;

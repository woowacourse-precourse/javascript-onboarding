function hasNonLowercase(str) {
  for (let i = 0; i < str.length; ++i) {
    if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) return true;
  }
  return false;
}

function isException(str) {
  return (
    !(typeof str === 'string') ||
    str.length > 1000 ||
    str.length < 1 ||
    hasNonLowercase(str)
  );
}

function problem2(cryptogram) {
  if (isException(cryptogram)) return;
  const stack = [];
  let stackIdx = -1;

  for (let i = 0; i < cryptogram.length; ++i) {
    if (stackIdx > -1 && cryptogram.charAt(i) === stack[stackIdx]) {
      stack.pop();
      --stackIdx;
    } else {
      stack.push(cryptogram.charAt(i));
      ++stackIdx;
    }
  }
  return stack.join('');
}

module.exports = problem2;

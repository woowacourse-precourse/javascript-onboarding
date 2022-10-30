function removeOverlap(array) {
  let stack = [];
  array.forEach((str) => {
    if (!stack.length) {
      stack.push(str);
    } else {
      if (stack[stack.length - 1] === str) {
        stack.pop();
      } else {
        stack.push(str);
      }
    }
  });
  return stack;
}

function problem2(cryptogram) {
  let strArr = cryptogram.split("");

  const result = removeOverlap(strArr);

  return result.join("");
}

module.exports = problem2;

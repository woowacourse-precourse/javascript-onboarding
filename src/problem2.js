function problem2(cryptogram) {
  const stack = [];
  let prevDeletedElem = '';

  for (let i = 0; i < cryptogram.length; i++) {
    const currElem = cryptogram[i];
    if (stack[stack.length - 1] === currElem) {
      stack.pop();
      prevDeletedElem = currElem;
    }

    if (prevDeletedElem !== currElem) {
      stack.push(currElem);
      prevDeletedElem = '';
    }
  }

  return stack.join('');
}

module.exports = problem2;

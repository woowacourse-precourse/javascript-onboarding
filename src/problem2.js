function problem2(cryptogram) {
  const cryptogramList = [...cryptogram];
  let stack = cryptogramList.splice(0, 1);
  let before;

  cryptogramList.forEach((el) => {
    if (el === stack[stack.length - 1]) {
      stack = stack.slice(0, -1);
      before = el;
      return;
    }

    if (el === before) {
      return;
    }

    stack.push(el);
  });

  return stack.join('');
}

module.exports = problem2;

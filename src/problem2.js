function problem2(cryptogram) {

  const stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++){
    const cur = cryptogram[i];

    if (stack.length === 0) {
      stack.push(cur);
    } else {
      const prev = stack[stack.length - 1];

      if (prev === cur) {
        stack.pop();
      } else {
        stack.push(cur);
      }
    }

  }
  return stack.join("");
  
}

module.exports = problem2;

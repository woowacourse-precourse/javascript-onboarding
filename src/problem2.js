function problem2(cryptogram) {
  cryptogram = cryptogram.split("");

  let isChange = 1;
  while (isChange) {
    const chStack = [];
    let isOverlap = 0;
    cryptogram.forEach((ch) => {
      if (ch === chStack[chStack.length - 1]) {
        isOverlap = 1;
      } else {
        if (isOverlap) {
          chStack.pop();
          isOverlap = 0;
        }
        chStack.push(ch);
      }
    });
    if (isOverlap) chStack.pop();

    if (chStack.length === cryptogram.length) isChange = 0;
    cryptogram = [...chStack];
  }
  return cryptogram.join("");
}

module.exports = problem2;

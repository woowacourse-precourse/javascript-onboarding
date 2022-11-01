function problem2(cryptogram) {
  cryptogram = cryptogram.toLowerCase();
  let stack = [cryptogram[0]];
  // 문자가 3개 이상 중복
  for (let i = 1; i < cryptogram.length; i++) {
    const top = stack[stack.length - 1];
    if (top !== cryptogram[i]) {
      stack.push(cryptogram[i]);
    } else {
      while (top === cryptogram[i + 1]) i++;
      stack.pop();
    }
  }

  return stack.join("");
}

module.exports = problem2;

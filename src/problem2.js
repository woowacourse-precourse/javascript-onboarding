function problem2(cryptogram) {
  const [top, ...rest] = cryptogram.split("");
  const temp = [top];

  for (let char of rest) {
    if (temp.length < 1) {
      temp.push(char);
    } else {
      if (temp[temp.length - 1] === char) temp.pop();
      else temp.push(char);
    }
  }

  return temp.join("");
}

module.exports = problem2;

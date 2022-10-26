function problem2(cryptogram) {
  const [top, ...rest] = cryptogram.split("");
  const temp = [top];

  for (let nextChar of rest) {
    if (temp.length < 1) {
      temp.push(nextChar);
    } else {
      if (temp[temp.length - 1] === nextChar) temp.pop();
      else temp.push(nextChar);
    }
  }

  return temp.join("");
}

module.exports = problem2;

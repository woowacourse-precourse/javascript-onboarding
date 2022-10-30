function problem2(cryptogram) {
  const result = [];
  const chList = cryptogram.split("");
  chList.forEach((ch) => {
    if (ch === result[result.length - 1]) result.pop();
    else result.push(ch);
  });
  return result.join("");
}

module.exports = problem2;

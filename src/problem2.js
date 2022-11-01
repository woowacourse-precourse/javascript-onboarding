function problem2(cryptogram) {
  const chList = cryptogram.split("");
  return chList
    .reduce((acc, ch) => {
      if (ch === acc[acc.length - 1]) return acc.slice(0, -1);
      return [...acc, ch];
    }, [])
    .join("");
}

module.exports = problem2;

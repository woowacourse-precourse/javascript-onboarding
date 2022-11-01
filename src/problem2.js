function problem2(cryptogram) {
  const result = cryptogram.split("").reduce((acc, curr) => {
    if (acc[acc.length - 1] === curr) {
      acc.pop();
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  return result.join("");
}

module.exports = problem2;

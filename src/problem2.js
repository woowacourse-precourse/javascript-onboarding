function problem2(cryptogram) {
  const answer = cryptogram.split("").reduce((acc, curr) => {
    if (acc[acc.length - 1] === curr) {
      acc.pop();
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  return answer.join("");
}

module.exports = problem2;

function problem2(cryptogram) {
  if (cryptogram.length <= 1) return cryptogram;
  return getNoRepeat(cryptogram);
}

function getNoRepeat(cryptogram) {
  let nonRepeat = [];
  cryptogram.split("").forEach((char) => {
    const prevChar = nonRepeat.pop();
    if (prevChar === char) return;
    nonRepeat.push(prevChar, char);
  });
  return nonRepeat.join("");
}

module.exports = problem2;

function problem2(cryptogram) {
  if (cryptogram.length <= 1) return cryptogram;
  return getNoRepeat(cryptogram);
}

function getNoRepeat(cryptogram) {
  const noRepeat = [];
  cryptogram.split("").forEach((char) => {
    const prevChar = noRepeat.pop();
    if (prevChar === char) return;
    noRepeat.push(prevChar, char);
  });
  return noRepeat.join("");
}

module.exports = problem2;

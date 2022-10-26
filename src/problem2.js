function problem2(cryptogram) {
  var answer;
  return answer;
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

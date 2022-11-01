function isSame(a, b) {
  return a === b;
}

function cryptAnalysis(str) {
  const stack = [];
  let cnt = 0;

  for (let i = 0, len = str.length; i < len; i++) {
    ++cnt;

    if (str[i] === str[i + 1]) continue;
    if (cnt === 1) {
      stack.push(str[i]);
    }
    cnt = 0;
  }

  return stack.join('');
}

function problem2(cryptogram) {
  let targetCrypto = cryptogram;
  let isEnd = false;

  while (!isEnd) {
    solvedCrypto = cryptAnalysis(targetCrypto);
    isEnd = isSame(targetCrypto, solvedCrypto);
    targetCrypto = solvedCrypto;
  }

  return targetCrypto;
}

module.exports = problem2;

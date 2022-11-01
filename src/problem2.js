function problem2(cryptogram) {
  let answer = cryptogram.split("");
  let flag;
  while (true) {
    [answer, flag] = decryption(answer);
    if (flag) {
      continue;
    } else {
      return answer.join("");
    }
  }
}

function decryption(cryptogram) {
  let checkedIndex = [];
  let prev;
  let result = [];
  for (const index in cryptogram) {
    if (prev != cryptogram[index]) {
      prev = cryptogram[index];
    } else {
      checkedIndex.push(index - 1);
      checkedIndex.push(Number(index));
    }
  }
  if (checkedIndex.length) {
    for (let i = 0; i < cryptogram.length; i++) {
      if (!checkedIndex.includes(i)) {
        result.push(cryptogram[i]);
      }
    }
    return [result, true];
  }
  return [cryptogram, false];
}

module.exports = problem2;

function isOverlap(cryptogram) {
  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] == cryptogram[i + 1]) return false;
  }

  return true;
}

function deduplication(cryptogram) {
  cryptogram += "!";

  let str = "";

  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] == cryptogram[i + 1]) {
      let cnt = 0;
      for (let j = i; j < cryptogram.length - 1; j++) {
        if (cryptogram[j] == cryptogram[j + 1]) {
          cnt++;
        } else break;
      }

      i += cnt;

      continue;
    }
    str += cryptogram[i];
  }

  return str;
}

function problem2(cryptogram) {
  var answer;

  let str = cryptogram;

  while (!isOverlap(str)) {
    str = deduplication(str);
  }

  answer = str;

  return answer;
}

module.exports = problem2;

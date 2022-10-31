function removeDuplicate(cryptogram) {
  let removedDuplicate = '';
  let cnt = 1;

  for (let i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) cnt++;
    else {
      if (cnt === 1) removedDuplicate += cryptogram[i];
      cnt = 1;
    }
  }

  return removedDuplicate;
}

function isDuplicate(cryptogram) {
  let check = false;

  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) return true;
  }

  return check;
}

function problem2(cryptogram) {
  let answer;
  let crypto = cryptogram;

  while (isDuplicate(crypto)) {
    crypto = removeDuplicate(crypto);
  }

  answer = crypto;
  return answer;
}

module.exports = problem2;

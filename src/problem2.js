function checkDuplication(cryptogram) {
  const check = [...cryptogram] //
    .some((x, i, cryptogram) => x === cryptogram[i + 1]);
  return check;
}

function removeDuplication(cryptogram) {
  let answer = '';
  let i;
  for (i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] !== cryptogram[i + 1]) answer += cryptogram[i];
    else {
      while (i < cryptogram.length - 1 && cryptogram[i] === cryptogram[i + 1])
        i++;
    }
  }
  if (i === cryptogram.length - 1) answer += cryptogram[i];
  return answer;
}

function decryption(cryptogram) {
  if (checkDuplication(cryptogram) === false) return cryptogram;
  cryptogram = removeDuplication(cryptogram);
  return decryption(cryptogram);
}

function problem2(cryptogram) {
  const answer = decryption(cryptogram);
  return answer;
}
module.exports = problem2;

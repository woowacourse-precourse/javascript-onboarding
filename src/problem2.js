function problem2(cryptogram) {
<<<<<<< HEAD
  let answer;

  answer = decrypt(cryptogram);
  return answer;
}

function decrypt(cryptogram) {
  while (isCryptogram(cryptogram)) {
    cryptogram = deleteConsecutiveChar(cryptogram);
  }
  return cryptogram;
}

function isCryptogram(cryptogram) {
  for (let i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i - 1] === cryptogram[i]) return true;
  }
  return false;
}

function deleteConsecutiveChar(cryptogram) {
  let result = "";

  for (let i = 0; i < cryptogram.length; i++) {
    if (
      cryptogram[i] === cryptogram[i + 1] ||
      cryptogram[i] === cryptogram[i - 1]
    ) {
      continue;
    }
    result += cryptogram[i];
  }
  return result;
}

=======
  var answer;
  return answer;
}

>>>>>>> 8458e00876e77cbdada319f34b483ab3683b5124
module.exports = problem2;

function problem2(cryptogram) {
  const answer = removeDuplication([...cryptogram]);

  return answer;
}

function removeDuplication(cryptogram) {
  const duplicatedCryptogram = getDuplicatedCryptogram(cryptogram);

  if (cryptogram.join('') !== duplicatedCryptogram.join('')) {
    return removeDuplication(duplicatedCryptogram);
  }

  return duplicatedCryptogram.join('');
}

function getDuplicatedCryptogram(cryptogram) {
  const isDuplicateArray = [];
  isDuplicateArray.fill(false);

  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      isDuplicateArray[i] = true;
      isDuplicateArray[i + 1] = true;
    }
  }

  return cryptogram.filter((value, idx) => value && !isDuplicateArray[idx]);
}

module.exports = problem2;

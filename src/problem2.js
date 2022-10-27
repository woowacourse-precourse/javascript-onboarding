function problem2(cryptogram) {
  return removeDuplication(cryptogram);
}

function removeDuplication(cryptogram) {
  const cryptogramArr = cryptogram.split('');
  let deduplicatedTemporary = '';
  let containDuplicates = false;

  for (let i = 0; i < cryptogramArr.length; i++) {
    for (let j = i + 1; j <= cryptogramArr.length; j++) {
      if (cryptogramArr[i] !== cryptogramArr[j]) {
        deduplicatedTemporary += cryptogramArr[i];
        break;
      } else if (cryptogramArr[i++] === cryptogramArr[j]) {
        containDuplicates = true;
        break;
      }
    }
  }
  return containDuplicates ? removeDuplication(deduplicatedTemporary) : deduplicatedTemporary;
}

module.exports = problem2;

function problem2(cryptogram) {
  return decodeCryptogram(cryptogram);
}

function decodeCryptogram(cryptogram) {
  let decoded = cryptogram.split('');
  const findDuplicated = /(.)\1+/;
  while (findDuplicated.test(decoded.join(''))) {
    for (let i = 0; i < decoded.length + 1; i++) {
      if (decoded[i - 1] === decoded[i]) {
        deleteDuplicateWord(decoded,i);
      }
    }
  }
  decoded = decoded.join('');

  return decoded;
}

function deleteDuplicateWord(words,currentIndex){
  let delCount = 2;
  let addIndex = 1;
  while(words[currentIndex - 1] === words[currentIndex+ addIndex]){
    delCount += 1;
    addIndex += 1;
  }
  words.splice(currentIndex - 1, delCount);
  currentIndex -= 1;
}

module.exports = problem2;

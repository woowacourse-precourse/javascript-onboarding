function removeConsecutive(cryptogram) {
  filteredCrypto = cryptogram.filter((char, i, list) => list[i-1] != char && list[i+1] != char);
  if (cryptogram.toString() == filteredCrypto.toString())
    return filteredCrypto;
  return removeConsecutive(filteredCrypto);
}

function problem2(cryptogram) {
  var answer;

  cryptogram = [...cryptogram];
  answer = removeConsecutive(cryptogram).join('');
  
  return answer;
}

module.exports = problem2;

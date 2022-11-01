function problem2(cryptogram) {
  var result = {
    cryptogram : cryptogram,
    isCompletelyDecrypted : false
  }

  while (!result.isCompletelyDecrypted) {
    result = removeConsecutive(result);
  }

  return result.cryptogram;
}

function removeConsecutive(result) {
  var idx = 1
  range = result.cryptogram.length;
  cryptogram = result.cryptogram;

  while (idx <= range) {
    if (cryptogram.charAt(idx) == cryptogram.charAt(idx-1)) {
      result.cryptogram = result.cryptogram.substr(0, idx-1) + result.cryptogram.substr(idx+1, range);
      return result;
    } 
    idx += 1;
  }
  
  result.isCompletelyDecrypted = true;
  return result;
}

module.exports = problem2;

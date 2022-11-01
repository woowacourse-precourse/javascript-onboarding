function problem2(cryptogram) {
  var result = {
    cryptogram : cryptogram,
    isDecrypt : false
  }

  while (!result.isDecrypt) {
    result = removeCon(result);
  }

  return result.cryptogram;
}

function removeCon(result) {
  var idx = 1
  scope = result.cryptogram.length;
  cryptogram = result.cryptogram;

  while (idx <= scope) {
    if (cryptogram.charAt(idx) == cryptogram.charAt(idx-1)) {
      result.cryptogram = result.cryptogram.substr(0, idx-1) + result.cryptogram.substr(idx+1, scope);
      return result;
    } 
    idx += 1;
  }
  result.isDecrypt = true;
  return result;
}

module.exports = problem2;

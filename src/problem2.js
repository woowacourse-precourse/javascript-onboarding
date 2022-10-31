function problem2(cryptogram) {
  let answer;

  return answer;
}

function decrypt(cryptogram) {
  if (typeof cryptogram === 'string') {
    let cryptogramArray = [...cryptogram];

    for (i = 0; i < cryptogramArray.length - 1; i++) {
      if (cryptogramArray[i] === cryptogramArray[i + 1]) {
        cryptogramArray[i] = '';
        cryptogramArray[i + 1] = '';
        cryptogram = cryptogramArray.join('');
        return cryptogram;
      }
    }
    cryptogram = cryptogramArray.join('');
    return cryptogram;
  }
}
module.exports = problem2;

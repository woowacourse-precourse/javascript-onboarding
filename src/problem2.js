function problem2(cryptogram) {
  let answer;
  let decryption = '';

  while (true) {
    decryption = decrypt(cryptogram);
    if (decryption === cryptogram) {
      answer = decryption;
      break;
    } else {
      cryptogram = decryption;
    }
  }
  return answer;
}

function decrypt(cryptogram) {
  if (typeof cryptogram === 'string') {
    let cryptogramArray = [...cryptogram];

    for (i = 0; i < cryptogramArray.length - 1; i++) {
      let flag = 0;
      let j = i + 1;
      let alphabet = cryptogramArray[i];

      while (flag === 0) {
        if (alphabet === cryptogramArray[j]) {
          j++;
        } else {
          flag = 1;
        }
      }

      if (j !== i + 1) {
        for (k = i; k < j; k++) {
          cryptogramArray[k] = '';
        }
      }
    }

    cryptogram = cryptogramArray.join('');
    return cryptogram;
  }
}
module.exports = problem2;

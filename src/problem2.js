function decrypting(cryptogram) {
  const regExp = /(\w)\1+/g;
  while(cryptogram !== cryptogram.replace(regExp, ""))
    cryptogram = cryptogram.replace(regExp, "");
  return cryptogram;
}

function problem2(cryptogram) {
  var answer;
  answer = decrypting(cryptogram);
  return answer;
}

module.exports = problem2;
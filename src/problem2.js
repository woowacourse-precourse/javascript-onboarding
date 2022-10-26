function decrypting(cryptogram) {
  while(cryptogram !== cryptogram.replace(/(\w)\1/g, ""))
    cryptogram = cryptogram.replace(/(\w)\1/g, "");
  return cryptogram;
}

function problem2(cryptogram) {
  var answer;
  answer = decrypting(cryptogram);
  return answer;
}

module.exports = problem2;
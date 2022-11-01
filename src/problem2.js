function problem2(cryptogram) {
  var answer = decrypt(cryptogram)
  return answer;
}

function decrypt(cryptogram) {
  const checkDuplicateRegExp =  /(\w)\1+/g;
  while(checkDuplicateRegExp.test(cryptogram)){
    cryptogram = cryptogram.replace(checkDuplicateRegExp, "")
  }
  return cryptogram;
}

module.exports = problem2;
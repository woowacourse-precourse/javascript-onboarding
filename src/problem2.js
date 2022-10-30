const removeDuplication = (crypto) => {
  return crypto
}

function problem2(cryptogram) {
  var answer = cryptogram;
  while(true){
    const processedCrypto = removeDuplication(answer);
    if (processedCrypto === answer) break;
    answer = processedCrypto;
  }
  return answer;
}

module.exports = problem2;

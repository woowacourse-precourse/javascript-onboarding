function problem2(cryptogram) {
  let answer;
  answer = decodeCryptogram(cryptogram);
  return answer;
}

function decodeCryptogram(cryptogram){
  let decoded = cryptogram.split('');
  const findDuplicated = /(.)\1+/;
  while (findDuplicated.test(decoded.join(''))){
    for (let i = 0; i < decoded.length + 1; i++){
      if (decoded[i - 1] === decoded[i]){
        let delCount = 2;
        let addIndex = 1;
        while(decoded[i - 1] === decoded[i + addIndex]){
          delCount++;
          addIndex++;
        }
        decoded.splice(i-1,delCount);
        i--;
      }
    }
  }
  decoded = decoded.join('');

  return decoded;
}

module.exports = problem2;

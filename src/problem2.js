function problem2(cryptogram) {
  let nowCryptogram = cryptogram;
  let decryption = '';

  while(true){
    decryption = getDecryption(nowCryptogram);

    if(nowCryptogram.length == decryption.length) break;
    
    nowCryptogram = decryption;
  }
  
  return decryption;
}

function getDecryption(cryptogram) {
  let decryption = '';

  for (let i=0; i<cryptogram.length-1; i++){
    if(cryptogram[i] == cryptogram[i+1]) continue;
    if(cryptogram[i] == cryptogram[i-1]) continue;
    decryption += cryptogram[i];
  }

  const lastIndex = cryptogram.length-1;
  if(cryptogram[lastIndex] != cryptogram[lastIndex-1]){
    decryption += cryptogram[lastIndex];
  }

  return decryption;
}

module.exports = problem2;

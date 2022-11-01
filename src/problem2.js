function removeDuplicateLetters(cryptogram) {
  for(let i = 1; i<cryptogram.length; i++) {
    if(cryptogram[i] === cryptogram[i-1]) {
      cryptogram = cryptogram.slice(0, i-1) + cryptogram.slice(i+1);
      i -= 1;
    }
  }
  return cryptogram;
}

function problem2(cryptogram) {
  while(true){
    let temp = removeDuplicateLetters(cryptogram);
    if(temp === cryptogram) break;
    cryptogram = temp;
  }
  return cryptogram;
}

module.exports = problem2;

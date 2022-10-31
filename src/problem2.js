function removeSameChar(cryptogram) {
  var answer = [];
  for (var i = 0; i < cryptogram.length; i++) {
    if (cryptogram[i] !== cryptogram[i+1] && cryptogram[i] !== cryptogram[i-1]){
      answer.push(cryptogram[i]);
    }
  }
  return answer.join("");
}

function problem2(cryptogram) {
  while(true){
    if (cryptogram === removeSameChar(cryptogram)){
      return cryptogram;
    } else{
      cryptogram = removeSameChar(cryptogram);
    }
  }
}

module.exports = problem2;

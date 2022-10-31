function problem2(cryptogram) {
  while(true){
    const cryptogramLength = cryptogram.length
    cryptogram = cryptogram.replace(/([a-z])\1+/g,'')
    if(cryptogramLength === cryptogram.length){
      break
    }
  }
  return cryptogram
}

module.exports = problem2;

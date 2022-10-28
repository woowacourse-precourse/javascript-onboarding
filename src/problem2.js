function problem2(cryptogram) {
  var answer;
  var i = 0
  while (i < cryptogram.length){
    if(cryptogram[i] !== cryptogram[i+1]) {
      i += 1
      continue
    }
    for(let j = i+1;j<cryptogram.length;j++){
      if(cryptogram[j] == cryptogram[i]){continue}
      cryptogram = cryptogram.slice(0,i) + cryptogram.slice(j,)
      i = 0
    }
  }
  answer = cryptogram

  return answer;
}

module.exports = problem2;

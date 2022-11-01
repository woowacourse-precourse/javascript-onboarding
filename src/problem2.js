function problem2(cryptogram) {
  var result;
  return result;
}

const duplication = (cryptogram) => {
  for(let i = 0; i < cryptogram.length; i++){
    let word = cryptogram[i];
    let count=1;
    for(j = i+1; j < cryptogram.length; j++){
      if(cryptogram[j] === word) count++;
    }
  }
  if(count !== 1){
    cryptogram.splice(i,count)
  }
  return cryptogram;
}
let result = cryptogram.split('')

while(i){
  if(result.join('') === duplication(answer).join('')){
    return result.join('')
  }
}
module.exports = problem2;

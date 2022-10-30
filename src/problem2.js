const checkCyrp=(cyrp)=>{
  for(let i=0; i<cyrp.length-1; i++){
      if (cyrp[i]===cyrp[i+1]){
          return cyrp[i];
      }
  }
  return false;
}

function problem2(cryptogram){
  let regex;
  let word = checkCyrp(cryptogram);
  while(word){
      regex = new RegExp(`${word}${word}+`, 'g');
      cryptogram = cryptogram.replace(regex, '')
      word = checkCyrp(cryptogram)
  }
  return cryptogram;
}

module.exports = problem2;

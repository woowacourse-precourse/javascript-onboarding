function deleteString(cryptogram){
  stringLength = cryptogram.length;
  let check = new Array(stringLength).fill(0);
  let newCryptogram = '';
  let count = 0;

  for (let i = 0; i < stringLength; i++){
    
    if((cryptogram[i] == cryptogram[i + 1]) && (i != stringLength - 1)){
      count += 1;
      check[i] = 1;
      check[i+1] = 1;
    }
    else{
      newCryptogram += cryptogram[i]
    }
  }

  return newCryptogram;
}

function problem2(cryptogram) {
    return deleteString(cryptogram);
}

console.log(problem2("browoanoommnaon"));

module.exports = problem2;

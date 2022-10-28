const removeConsecutiveString = (cryptogram) => {
  let change = false;
  let array = "";
  let lastWord = '';

  for(let i=0;i<cryptogram.length-1;i++) {
    if(cryptogram[i] === cryptogram[i+1]) {
      lastWord = cryptogram[i];
      change = true;
      while(cryptogram[i] === cryptogram[i+1]) {
        i++;
        if(i === cryptogram.length-1) {
          break;
        }
      }
    }
    else {
      lastWord = cryptogram;
      array+=cryptogram[i];
    }
  }
  if(lastWord !== cryptogram[cryptogram.length-1])
    array += cryptogram[cryptogram.length-1];

  // console.log(array);
  if(change === false)
    return array;
}

function problem2(cryptogram) {
  return removeConsecutiveString(cryptogram);
}

module.exports = problem2;

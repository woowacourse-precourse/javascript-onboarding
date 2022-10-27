function problem2(cryptogram) {

  let cryptogramArr = cryptogram.split('');

  for(let i = 0 ; i < cryptogramArr.length ; ){
    if(cryptogramArr[i] == cryptogramArr[i+1]){
      cryptogramArr.splice(i,2)
      i = 0;
      continue;
    } 
    i += 1;
  }

  return cryptogramArr.join('');

}

module.exports = problem2;

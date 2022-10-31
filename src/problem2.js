function problem2(cryptogram) {
  var answer = cutString(cryptogram);
  return answer;
}
function cutString(cryptogram) { 
  const alphaItem = [];
  for(i = 0; i < cryptogram.length; i++) {
    alphaItem.push(cryptogram.substring(i, i+1));
  } 
  for(j = 0; j < cryptogram.length; j++){
    for(i = 0; i < cryptogram.length; i++) { 
      if (alphaItem[i] === alphaItem[i+1]) {
        alphaItem.splice(i, 2);
      }
    }
  }
  return alphaItem.join('');
}

module.exports = problem2;

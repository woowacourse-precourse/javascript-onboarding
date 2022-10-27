function problem2(cryptogram) {
  const cryptoArray = cryptogram.split('');
    
  const DetectedIndexs = getDupIndexs(cryptoArray)
  
  return DetectedIndexs;  
}

function getDupIndexs(cryptoArray) {
  const dupIndexs = [];
  let isDuplicate = false;
  for(let i = 0; i < cryptoArray.length; i++) {
    if( cryptoArray[i] === cryptoArray[i+1]) {
      isDuplicate = true;
      dupIndexs.push(i);
    } else if(isDuplicate) {
      isDuplicate = false;
      dupIndexs.push(i);
    }
  }
  return dupIndexs;
}

console.log(problem2('browoanoommnaon'))

// module.exports = problem2;
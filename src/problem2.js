function problem2(cryptogram) {
  const cryptoArray = cryptogram.split('');
    
  const DetectedIndexs = getDupIndexs(cryptoArray)

  DetectedIndexs.map((index) => cryptoArray.splice(index, 1))
  
  return cryptoArray.join(''); 
}

function getDupIndexs(cryptoArray) {
  const dupIndexs = [];
  let isDuplicate = false;
  for(let i = 0; i < cryptoArray.length; i++) {
    if( cryptoArray[i] === cryptoArray[i+1]) {
      isDuplicate = true;
      dupIndexs.unshift(i);
    } else if(isDuplicate) {
      isDuplicate = false;
      dupIndexs.unshift(i);
    }
  }
  return dupIndexs;
}

console.log(problem2('browoanoommnaon'))

// module.exports = problem2;
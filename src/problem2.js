function problem2(cryptogram) {
  const stringArray = cryptogram.split('');

  while(1){
    const DetectedIndexs = getDupIndexs(stringArray)
    if(DetectedIndexs.length === 0) break;
    DetectedIndexs.map((index) => stringArray.splice(index, 1))
  }
  
  return stringArray.join('');
}

function getDupIndexs(stringArray) {
  const dupIndexs = [];
  let isDuplicate = false;
  for(let i = 0; i < stringArray.length; i++) {
    if( stringArray[i] === stringArray[i+1]) {
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
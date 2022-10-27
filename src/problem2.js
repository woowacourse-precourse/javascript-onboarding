function problem2(cryptogram) {
  let answer;
  while(isDuplicate(cryptogram)){

  }
  return answer;
}
function isDuplicate(cryptogram){
  for(let i =0; i<cryptogram.length-1; i++){
    if(cryptogram[i]===cryptogram[i+1])
      return 1;
  }
  return 0;
}
function findDuplicatesCharIndex(cryptogram) {
  let findIndex = [];
  for (let i = 0; i < cryptogram.length - 1; i++) {
    if (cryptogram[i] === cryptogram[i + 1]) {
      findIndex.push(i);
      findIndex.push(i + 1);
    }
  }
  return Array.from(new Set(findIndex));
}
function removeDuplicatesChar(refinedCryptogram, indexArr) {
  for (let i = indexArr.length - 1; i > -1; i--) {
    refinedCryptogram.splice(indexArr[i], 1);
  }
  return refinedCryptogram.join("");
}

module.exports = problem2;

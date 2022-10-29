function problem2(cryptogram) {
  var answer;
  let arr = [];
  for (let j = 0; j < cryptogram.length; j++) {
    arr.push(cryptogram[j]);
  }
  if (cryptogram.length <= 100 && cryptogram.length > 1) {
    if (cryptogram === cryptogram.toLowerCase()) {
      let i = 0;
      while(i<arr.length){
        if(arr[i+1]===arr[i]){
          arr.splice(i,2);
          i=0;
          if (arr.length <= 2) {
            if (arr[i] === arr[i + 1]) {
              arr.splice(i, 2);
            }
          }
        }
        i++;
      }
      cryptogram = arr.join("");
      answer = cryptogram;
    } else {
      return null;
    }
  } else {
    return null;
  }
  return answer;
}

module.exports = problem2;

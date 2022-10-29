function problem2(cryptogram) {
  var answer="";
  let isClash = false;
  const cryptoArr = Array.from(cryptogram);
  for(let i= 0; i < cryptoArr.length ; i++) {
    if(cryptoArr[i] !== cryptoArr[i+1]) {
      answer += cryptoArr[i];
    }else {
      isClash = true;
      i++;
    }
  }
  const result = isClash ? problem2(answer) : answer;
  return result;
}
module.exports = problem2;
function problem2(cryptogram) {
  var answer;
  let tracker = 0;

  for(let i = 0; i < length(cryptogram); i++){
    if(cryptogram[i] === cryptogram[i+1]){
      tracker = tracker + 1;
      continue;
    }
  }
  return answer;
}

module.exports = problem2;

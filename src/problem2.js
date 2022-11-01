function problem2(cryptogram) {
  let answer = "";
  let lastStr = "";
  for (let i=0; i<cryptogram.length; i++) {
    let lastWord = answer[answer.length - 1];
    if (lastStr !== cryptogram[i] && lastWord !== cryptogram[i]) {
      answer += cryptogram[i];
    } else if (lastWord === cryptogram[i]) {
      answer = answer.slice(0, -1); 
    }
    lastStr = cryptogram[i];
  }  
  return answer;
}

module.exports = problem2;

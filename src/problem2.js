function problem2(cryptogram) {
  let answer = "";
  for(let i = 0; i<cryptogram.length; i++){
    if(cryptogram.indexOf(cryptogram[i]) == i) answer += cryptogram[i];
  }
  return answer;
}

module.exports = problem2;

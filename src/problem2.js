function problem2(cryptogram) {
  let stackcryptogram = []
  for(let i=0; i<cryptogram.length;i++){
    stackcryptogram.push(cryptogram[i]);
  }

  for(i=0; i<stackcryptogram.length;i++){
    if (stackcryptogram[i] === stackcryptogram[i+1]) {
      stackcryptogram.splice(i,2);
      i=-1;
    }
  }

  var answer;
  answer = stackcryptogram.join('');
  return answer;
}

module.exports = problem2;

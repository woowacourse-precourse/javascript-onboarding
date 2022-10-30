function problem2(cryptogram) {
  let stackcryptogram = []
  for(let i=0; i<cryptogram.length;i++){
    stackcryptogram.push(cryptogram[i]);
  }
  let repeat = 0;
  for(i=0; i<stackcryptogram.length;i++){
    
    if (stackcryptogram[i] === stackcryptogram[i+1]) {
      repeat++;
    }
    else{
      if (repeat !== 0) {
        stackcryptogram.splice(i-repeat,repeat+1);
        repeat=0;
        i=-1;
      }
    }
  }

  var answer;
  answer = stackcryptogram.join('');
  return answer;
}

module.exports = problem2;

function problem2(cryptogram) {
  let resultArray = [];
  for(const newCh of cryptogram){
    if(!(resultArray.length)){ resultArray.push(newCh); }
    else {
      preCh = resultArray.pop();
      if(preCh != newCh) {
        resultArray.push(preCh);
        resultArray.push(newCh);
      }
    }
  }
  return resultArray.join("");
}

console.log(problem2("browoanoommnaon"));

module.exports = problem2;
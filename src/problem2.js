function problem2(cryptogram) {
  
  let strAnswer = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++){
    if(cryptogram[i] === strAnswer[strAnswer.length- 1]){
      strAnswer.pop();
    }
    else{
      strAnswer.push(cryptogram[i]);
    }
  }
  return strAnswer.join("");
}

module.exports = problem2;

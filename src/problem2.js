function problem2(cryptogram) {
  var answer = [];
  function checkString(cryptogram){
    for(let i=0;i<cryptogram.length-1;i++){    
      if(cryptogram[i]===cryptogram[i+1]){
        cryptogram = (cryptogram.slice(0,i)+cryptogram.slice(i+2)); 
        console.log(answer);
        answer.push(cryptogram);
        checkString(cryptogram);
      }
    }
  }
  checkString(cryptogram);
  return answer.pop();
}

module.exports = problem2;
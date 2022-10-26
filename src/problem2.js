function problem2(cryptogram) {
  var answer = [];
  function checkString(cryptogram){
    for(let i=0;i<cryptogram.length-1;i++){    
      if(cryptogram[i]===cryptogram[i+1]){
        console.log(i);
        cryptogram = (cryptogram.slice(0,i)+cryptogram.slice(i+2)); 
        console.log(cryptogram);
      }
    }
  }
  checkString(cryptogram);
 
  return answer;
}

module.exports = problem2;
cryptogram="browoanoommnaon";
problem2(cryptogram);
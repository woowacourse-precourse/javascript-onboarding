function problem2(cryptogram) {
    var answer = "";
    console.log(cryptogram);
    for(let i=0;i<cryptogram.length;i++){
      if(cryptogram[i]===cryptogram[i+1]){
        answer = cryptogram.substring(0,cryptogram[i]) + cryptogram.substring(cryptogram[i+2],-1);
       
      }
      console.log(answer);
    }
    return answer;
  }
  
  module.exports = problem2;
  cryptogram = "browoanoommnaon"
  problem2(cryptogram);
  // browoannaon
  // browoaaon 
  // browoon 
  // brown 
  
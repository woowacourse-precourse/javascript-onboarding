function problem2(cryptogram) {
  var answer = "";
  let condition = 0;

  while(condition == 0){
    for(let i = 0; i < cryptogram.length-1; i++){
      if(cryptogram.charAt(i) == cryptogram.charAt(i+1)){
        if(i != 0){
          cryptogram = cryptogram.substring(0,i) + cryptogram.substring(i+2);
          break;
        }
        else { //if(i == 0)
          cryptogram = cryptogram.substring(i+2);
          break;
        }
      }
      else{
        if(i == cryptogram.length-2){
          condition = 1;
          break;
        }
      }
    }
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;

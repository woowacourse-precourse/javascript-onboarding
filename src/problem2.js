function problem2(cryptogram) {
  var answer;
  let check=true;
  while(check){
    check=false;
    for(let i=0; i<cryptogram.length-1;i++){
      if(cryptogram.charAt(i)==cryptogram.charAt(i+1)){
        cryptogram= cryptogram.slice(0,i) + cryptogram.slice(i+2);
        check=true;
      }
    }
  }
  answer=cryptogram;
  return answer;
}

module.exports = problem2;

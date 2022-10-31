function problem2(cryptogram) {
  var answer;
  return answer;
  let check=true;
  while(check){
    check=false;
    for(let i=0; i<cryptogram.length;i++){
      if(cryptogram.charAt(i)==cryptogram.charAt(i+1)){
        cryptogram= cryptogram.slice(0,i) + cryptogram.slice(i+2);
        check=true;
      }
    }
  }
}
answer=cryptogram;
module.exports = problem2;

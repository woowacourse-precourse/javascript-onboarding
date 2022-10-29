function problem2(cryptogram) {
  var answer;
  var cr = cryptogram;

  while(1){

    for(let i=0; i<cr.length; ++i){
      if(cr[i] == cr[i+1]){
        
        let front = cr.substring(0,i);
        let back = cr.substring(i+2, cr.length);
        cr = front + back;
        i--;
      }
    }
  }
  return answer;
}

module.exports = problem2;

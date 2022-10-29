function problem2(cryptogram) {
  var answer;
  var cr = cryptogram;

  while(1){
    let cnt=0;
    for(let i=0; i<cr.length; ++i){
      if(cr[i] == cr[i+1]){
        cnt++;
        let front = cr.substring(0,i);
        let back = cr.substring(i+2, cr.length);
        cr = front + back;
        i--;
      }
    }
    if(cnt==0) break;
  }
  answer = cr;
  return answer;
}

module.exports = problem2;

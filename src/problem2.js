function problem2(cryptogram) {
  var answer;
  var cr = cryptogram;

  while(1){
    let cnt=0;
    for(let i=0; i<cr.length; ++i){
      let notDup=0;
      if(cr[i] == cr[i+1]){
        cnt++;
        cr = deleteDup(cr, i);
        i--;
      }
    }
    if(cnt==0) break;
  }
  answer = cr;
  return answer;
}

function deleteDup(crypto, i) {
    for(let j=i+1; j<crypto.length; ++j){
      if(crypto[i]!=crypto[j]) { notDup=j; break; }
    }
    let front = crypto.substring(0,i);
    let back = crypto.substring(notDup, crypto.length);
    crypto = front + back;
  return crypto;
}

module.exports = problem2;

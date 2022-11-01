function problem6(forms) {
  var answer;
  let len = forms.length;
  let duplMails = new Array(len).fill(0);
  let word;

  for(let i=0; i<len; ++i){
    
    for(let k=0; k<forms[i][1].length; ++k){
      word = forms[i][1].substr(k,2);
      if(word.length<2) break;

      for(let j=0; j<len; ++j){
        if(i!=j && forms[j][1].indexOf(word) >= 0) {
          duplMails[i] = 1;
          duplMails[j] = 1;
        }
      }
    }
  }
  for(let i=0; i<len; ++i){
    if(duplMails[i]) duplMails[i] = forms[i][0];
  }
  answer = duplMails.filter(e=>e!=0).sort();
  answer = [...new Set(answer)];
  return answer;
}

module.exports = problem6;

function problem6(forms) {
  var answer;
  let len = forms.length;
  let duplMails = new Array(len).fill(0);

  for(let i=0; i<len; ++i){
    for(let j=0; j<len; ++j){
      let word = forms[i][1].substr(j,2);
      
      if(word.length<2) break;
      console.log(word);
      if(forms[j][1].indexOf(word) >= 0) {
        duplMails[i] = 1;
        duplMails[j] = 1;
      }
    }
  }
  for(let i=0; i<len; ++i){
    if(duplMails[i]) duplMails[i] = forms[i][0];
  }
  return answer;
}

module.exports = problem6;

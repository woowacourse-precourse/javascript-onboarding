function problem6(forms) {
  let commonWords = {};
  let twoWords = [];
  let nicknames = [];
  let standardNickname = '';
  const len = forms.length;
  let answer = [];
  for (i=0; i<len; i++) {
    nicknames.push(forms[i][1]);
    }
  for (i=0; i<len; i++){
    standardNickname = nicknames[i]
    for (j=0; j< standardNickname.length-1; j++){
        twoWords.push(standardNickname.substr(j,2));
        nicknames.forEach(x => { 
          if (x.includes(twoWords) && x !==standardNickname)
          commonWords[twoWords] = 1;
        })
        twoWords = []; 
    }
  }
  let num = Object.keys(commonWords).length;
  for(i=0;i<num;i++){
    for (j=0;j<len;j++){
      if(nicknames[j].includes(Object.keys(commonWords)[0])){
        answer.push(forms[j][0]);
      }
    }  
  }
  return answer;
}

module.exports = problem6;

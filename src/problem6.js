function problem6(forms) {
  let commonWords = {};
  let twoWords = [];
  let nicknames = [];
  let standardNickname = '';
  const len = forms.length;
  let answerArr = [];
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
      if(nicknames[j].includes(Object.keys(commonWords)[i])){
        answerArr.push(forms[j][0]);
      }
    }  
  }
  answerArr = answerArr.sort();
  const set = new Set(answerArr)
  let answer= [...set]
  return answer;
}

module.exports = problem6;

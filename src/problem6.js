function problem6(forms) {
  var answer;

const nickNameList = forms.map(([_, nickName]) => nickName);
  const examineWord = nickNameList
    .map((nickName) => {
      const overlapWord = [];

      for (let i = 0; i < nickName.length - 1; i++) {
        let word = nickName[i] + nickName[i + 1];
        overlapWord.push(word);
      }
      return overlapWord;
    })

  const countNick = examineWord.flat().reduce((prev,next)=>{
      if(!prev[next]){
        prev[next] = 0;
      }
      prev[next]++;
      
      return prev;
  },{})

  const overlapNick = [];

  for(let key in countNick){
    if(countNick[key] > 1){
      overlapNick.push(key);
    }
  }
  const overlapEmail = [];

  overlapNick.map((element) => {
    for (let i = 0; i < forms.length; i++) {
        if (forms[i][1].indexOf(element) !== -1) {
          overlapEmail.push(forms[i][0]);
        }
      }
  })
  answer = overlapEmail.sort();
  return answer;
}

module.exports = problem6;

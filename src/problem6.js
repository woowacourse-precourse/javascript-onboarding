function problem6(forms) {
  const answer = new Set([]);
  const nick = [];
  let temp = '';
  let dic = {};

  for (let i = 0; i < forms.length; i++){
    nick.push(forms[i][1]);

    for(let j = 0; j < nick[i].length - 1; j++){
      temp = nick[i].substring(j, j + 2);
      console.log(temp);

      if(dic[temp]){
        dic[temp] += 1;
      }

      else{
        dic[temp] = 1;
      }
    }
  }

  for(i = 0; i < forms.length; i++){
    for(j = 0; j < nick[i].length - 1; j++){
      temp = nick[i].substring(j, j + 2);

      if(dic[temp] > 1){
        answer.add(forms[i][0]);
      }
    }
  }

  const answerArray = Array.from(answer);
  answerArray.sort();

  return answerArray;
}

module.exports = problem6;

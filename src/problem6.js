function problem6(forms) {
  var answer;
  var value = []
  for(let i = 0;i < forms.length;i++){
    if(forms[i][1].length == 1){continue}
    for(let j = 0;j < forms[i][1].length - 1;j++){
      const checkNick = forms[i][1].substr(j, 2)
      for(let k = 0;k < forms.length;k++){
        if (k == i){continue}
        if (forms[k][1].includes(checkNick)) {
          value.push(forms[k][0])
        }}
      }
    }
  
  return answer;

}

module.exports = problem6;

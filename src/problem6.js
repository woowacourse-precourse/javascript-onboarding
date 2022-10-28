function problem6(forms) {
  let word;
  let result = [];
  for(i = 0; i < forms.length; i++){
    if(!forms[i]) continue;
    for(j = 0; j < forms[i][1].length - 1; j++){
      word = forms[i][1].substring(j, j + 2);
      for(k = i + 1; k < forms.length; k++){
        if(!forms[k]) continue;
        if(forms[k][1].includes(word)){
          result.push(forms[k][0]);
          if(!result.includes(forms[i][0])){
            result.push(forms[i][0]);
          }
          delete(forms[k]);
        }
      }
    }
    if(result.includes(forms[i][0])){
      delete(forms[i]);
    }
  }
  return result;
}

module.exports = problem6;

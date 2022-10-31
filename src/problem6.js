function problem6(forms) {
  let word;
  let result = [];
  // 1. loop for extracting nickname from forms.
  for(i = 0; i < forms.length; i++){
    if(!forms[i]) continue;
    // 2. loop for extracting two words from nickname.
    for(j = 0; j < forms[i][1].length - 1; j++){
      word = forms[i][1].substring(j, j + 2);
      // 3. loop for checking if others have the same words.
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

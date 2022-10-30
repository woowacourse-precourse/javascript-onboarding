function problem6(forms) {
  
  const checkArray = Array(forms.length).fill(false);
  const dictionary = new Map();
  const overlapUser = [];  

  for ( let i = 0 ; i < forms.length ; i++) {
    for( let j = 1 ; j <= forms[i][1].length - 1; j++ ) {
      const word = forms[i][1][j - 1]+forms[i][1][j];
      dictionary.has(word) 
      ? dictionary.set(word, dictionary.get(word)+1)
      : dictionary.set(word, (dictionary.get(word)||0)+1);  
    }
  }

  for(let [word, count] of dictionary){
    if(1 < count){
      for( let i = 0 ; i < forms.length; i++){
        if(forms[i][1].includes(word) && !checkArray[i]) {
          overlapUser.push(forms[i][0]);
          checkArray[i] = true;
        } 
      }
    }  
  }
  
  return overlapUser.sort();
}

module.exports = problem6;

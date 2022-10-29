function problem6(forms) {
  const duplicateCrewEmail = [];
  const duplicateNickname = new Set();

  for (let i = 0; i < forms.length; i += 1){
    for(let j = 0; j < forms[i][1].length - 1; j += 1){
      duplicateNickname.add(forms[i][1].substr(j, 2));
    }
  }
  
  for (let nick of duplicateNickname){
    let count = 0;
    for(let i = 0; i < forms.length; i += 1){
      if (forms[i][1].includes(nick)){
        duplicateCrewEmail.push(forms[i][0]);
        count += 1;
      }    
    }
    if (count < 2){
      duplicateCrewEmail.pop();
    }
  }
}

module.exports = problem6;

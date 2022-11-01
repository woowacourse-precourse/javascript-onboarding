const sliceNickname = (nickname) => {
  const sliceNickname = [];
  for(let i = 0; i < nickname.length - 1; i += 1){
    let slice = nickname.substr(i, SPLIT_LENGTH);
    sliceNickname.push(slice);
  }
  return sliceNickname;
}

function problem6(forms) {
  const duplicateCrewEmail = [];
  const sliceNicknameList = forms.reduce((acc, [, nickname]) => { 
    return [...acc, ...sliceNickname(nickname)];
  }, []);
  
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
  const duplicateCrewEmailFinal = new Set(duplicateCrewEmail);
  const sortedCrewEmail = [...duplicateCrewEmailFinal].sort();
  return sortedCrewEmail;
}

module.exports = problem6;

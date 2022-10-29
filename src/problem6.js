function problem6(forms) {
  const duplicateNickname = new Set();

  for (let i = 0; i < forms.length; i += 1){
    for(let j = 0; j < forms[i][1].length - 1; j += 1){
      duplicateNickname.add(forms[i][1].substr(j, 2));
    }
  }
}

module.exports = problem6;

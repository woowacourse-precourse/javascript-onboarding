function problem6(forms) {
  let changeNickname = [];

  forms.forEach((data, index) => {
    for(let i = index + 1; i < forms.length; i++){
      for(let j = 0; j < data[1].length - 1; j++){
        (forms[i][1].search(data[1].substr(j,2)) !== -1) ? changeNickname.push(data[0], forms[i][0]) : null;
      }
    }
  })

  return [...new Set(changeNickname)].sort();
}

module.exports = problem6;

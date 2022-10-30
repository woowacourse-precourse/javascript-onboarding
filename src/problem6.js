function problem6(forms) {
  let letter = [];

  for(let i = 0; i < forms.length; i++){
    letter.push([]);
    for(let j = 0; j < forms[i][1].length - 1; j++){
      letter[i][j] = forms[i][1].slice(j,j+2);
    }
  }
  let mailList = [];

  mailList = forms.filter((crew,index) => {
    for(let i = 0; i < letter.length; i++){
      for(let j = 0; j < letter[i].length; j++){
        if(index === i){
          continue;
        }
        else if(crew[1].includes(letter[i][j])){
          return true;
        }
      }
    }
  })
  return mailList.map(crew => crew[0]).sort();
}

module.exports = problem6;

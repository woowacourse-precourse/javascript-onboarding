function problem6(forms) {
  const twoLetterName = checkDuplicateChar(forms);
}

function checkDuplicateChar(forms){
  let twoLetterNick = [];
  for(let i = 0; i <forms.length; i++){
    let checkDuplicate = forms[i][1].split("");
    for(let j = 0 ; j < checkDuplicate.length-1 ; j ++ ){
      twoLetterNick.push(checkDuplicate[j] + checkDuplicate[j+1]);
    }
  }
  return twoLetterNick; 
}

module.exports = problem6;

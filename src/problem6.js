function problem6(forms) {
  const twoLetterName = checkDuplicateChar(forms);
  const duplicateNick = howManyNickname(twoLetterName);
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
function howManyNickname(forms){
  const getNickNumber = {};
  forms.forEach((x) => {
  getNickNumber[x] = (getNickNumber[x] || 0)+1});
  return getNickNumber;
}

module.exports = problem6;

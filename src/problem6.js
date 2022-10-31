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
function checkContainDuplicate(forms){
  let duplicateCotianName = [];
  let NickNumberArr = (Object.entries(forms));
  for(let i = 0; i < NickNumberArr[i][1]; i++){
    if(NickNumberArr[i][1] > 1){
      duplicateCotianName.push(NickNumberArr[i][0]);
    }
  }
  return duplicateCotianName;
}

module.exports = problem6;

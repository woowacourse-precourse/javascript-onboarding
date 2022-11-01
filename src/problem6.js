function problem6(forms) {
  const twoLetterName = checkDuplicateChar(forms);
  const duplicateNick = howManyNickname(twoLetterName);
  const checkDuplicateName = checkContainDuplicate(duplicateNick);
  const formsInNick = checkInNick(forms, checkDuplicateName);
  const resultEmail = sortEmail(formsInNick);
  
  return resultEmail;
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
function checkInNick(forms,checkDuplicateName){
  duplicateNickEmail = [];
  for(let i = 0; i < forms.length; i++){
    if(forms[i][1].includes(checkDuplicateName)){
      duplicateNickEmail.push(forms[i][0]);
    }
  }
  return duplicateNickEmail;
}

function sortEmail(forms){
  return forms.sort();
}
module.exports = problem6;
function getRegexStr(nickname){
  let regexPatternList = [];
  for(let i = 0; i < nickname.length-1 ; i++){
    regexPatternList = [...regexPatternList, `${nickname[i]}${nickname[i+1]}`]
  }
  
  return regexPatternList.join('|');
}

function compareNickname(regex, nickname, forms){
  const equalList = forms.reduce((acc,[compareEmail,compareNickname])=>{
    if(nickname === compareNickname){
      return acc;
    }
    const isEqual = regex.test(compareNickname);
    if(isEqual){
      return [...acc, compareEmail];
    }
    return acc;
  },[]);

  return equalList;
}

function getEmailArr(forms){
  const emailList = forms.reduce((acc,[,nickname])=>{
    const regexStr = getRegexStr(nickname);
    const regex = new RegExp(`(${regexStr})`);
    const equalList = compareNickname(regex, nickname, forms);

    return Array.from(new Set([...acc, ...equalList]));
  },[]);

  return emailList;
}

function problem6(forms) {
  const emailList = getEmailArr(forms);
  
  return emailList.sort();
}

module.exports = problem6;

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


function problem6(forms) {
}

module.exports = problem6;

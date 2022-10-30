function getRegexStr(nickname){
  let regexPatternList = [];
  for(let i = 0; i < nickname.length-1 ; i++){
    regexPatternList = [...regexPatternList, `${nickname[i]}${nickname[i+1]}`]
  }
  
  return regexPatternList.join('|');
}

function problem6(forms) {
}

module.exports = problem6;

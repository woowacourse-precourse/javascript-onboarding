function problem4(word) {
  let answer="";
  const words = word.split("")
  for(let char of words){
    answer+=changeChar(char)
  }
  return answer;
}

function changeChar(char){
  let codeNum = char.charCodeAt(0)
  if(codeNum>=65 && codeNum<=90){
      codeNum = 90-(codeNum-65)
  }else if(codeNum>=97 && codeNum<=122){
      codeNum = 122-(codeNum-97)
  }
  return String.fromCharCode(codeNum)
}

module.exports = problem4;

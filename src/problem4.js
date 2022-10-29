function problem4(word) {
  var answer="";
  let preWord = word.split("")
  for(let char of preWord){
    answer+=changeChar(char)
  }

  return answer;
}

function changeChar(char){
  let code_num = char.charCodeAt(0)
  if(code_num>=65 && code_num<=90){
      code_num = 90-(code_num-65)
  }else if(code_num>=97 && code_num<=122){
      code_num = 122-(code_num-97)
  }
  return String.fromCharCode(code_num)
}

module.exports = problem4;

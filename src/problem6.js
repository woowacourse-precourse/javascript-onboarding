// nick1 과 nick2가 같은 글자를 연속적으로 포함하면 true를 return
function includeSameChar(nick1, nick2){
  for(let i = 0 ; i < nick1.length-1 ; i++){
    subStr = nick1.slice(i, i+2);
    if(nick2.includes(subStr))
      return true;
  }
  return false;
}
function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

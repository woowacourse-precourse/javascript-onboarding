function frogDic(c){
  if(c >= 'A' && c <= 'Z') // A의 아스키 코드 65, Z의 아스키 코드 90
    return String.fromCharCode(155 - c.charCodeAt(0));
  else if(c >= 'a' && c <= 'z')// a의 아스키 코드 97, z의 아스키 코드 122  
    return String.fromCharCode(219 - c.charCodeAt(0));
  else
    return c;
}
function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;

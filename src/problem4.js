function problem4(word) {
  
  let str_arr = [...word]
  let answer = ''
  str_arr.forEach(element => {
    answer += changeFrogChar(element)
  });
  return answer;
}

// 개구리 문자 변환
function changeFrogChar(c){
  if(! isAlpha(c)){
    return c
  }
  let newCode
  if(c == c.toUpperCase()){
    newCode = 'Z'.charCodeAt(0) - c.charCodeAt(0) + 'A'.charCodeAt(0)
  }
  else{
    newCode = 'z'.charCodeAt(0) - c.charCodeAt(0) + 'a'.charCodeAt(0)
  }

  return String.fromCharCode(newCode)
}

function isAlpha(c){
  return (((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z')))
}


module.exports = problem4;

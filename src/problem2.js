const isLowerCase = (string) => /^[a-z]*$/.test(string)

function problem2(cryptogram) {
  if(!isLowerCase(cryptogram)) throw Error('문자열이 소문자만으로 이루어지지 않았습니다.')
  if(cryptogram.length<1||cryptogram.length>1000) throw Error('문자열의 길이가 맞지 않습니다.');

  const stack = [];
  cryptogram.split("").forEach((char)=>{
    if(stack[stack.length-1]===char) {
      stack.pop();
    } else {
      stack.push(char);
    }  
  })

  return stack.join("");
  }

module.exports = problem2;
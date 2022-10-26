function problem2(cryptogram) {
  var answer;

  const stack = []
  
  for (let index = 0; index < cryptogram.length; index++) {
    const char = cryptogram[index];
    console.log(char, stack[stack.length-1])
    if(char === stack[stack.length-1]){
      stack.pop()
    }else{
      stack.push(char)
    }
  }

  answer = stack.join('')
  return answer;
}

module.exports = problem2;

function problem2(cryptogram) {
  let stack = []
  for (let i = 0; i < cryptogram.length; i++){
    const letter = cryptogram.charAt(i);
    if (letter === stack[stack.length - 1]){
      stack.pop();
    }else{
      stack.push(letter);
    }
  }

  word = stack.join("");
  return word;
}

module.exports = problem2;

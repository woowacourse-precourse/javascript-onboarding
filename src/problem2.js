function problem2(cryptogram) {
  var answer;
  var letters = cryptogram.split('');
  var stack = [];
  stack.push(letters[0])
  for(i = 1; i<letters.length; i++){
    if (stack.slice(-1) == letters[i]){
      stack.pop();
    }
    else stack.push(letters[i])
  }

  answer = stack.join("");
  return answer;
}

module.exports = problem2;

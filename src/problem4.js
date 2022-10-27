function problem4(word) {
  let letters = []
  
  for(let i = 0; i < word.length; i++){
    if(word[i] === " "){
      letters[i] = " ";
      continue;
    }

    if(word[i] === word[i].toUpperCase()){
      letters[i] = String.fromCharCode(155 - word.charCodeAt(i))
    }else{
      letters[i] = String.fromCharCode(219 - word.charCodeAt(i))
    }
  }

  const answer = letters.join('');

  return answer;
}

module.exports = problem4;

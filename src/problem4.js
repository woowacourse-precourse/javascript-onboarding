function problem4(word) {
  var answer;
  var newWord = '';
  var newSen = '';
  console.log(word);
  for(let i=0;i<word.length;i++){
    if(word[i] === ' '){
      newSen += ' ';
    }else if(word[i] === word[i].toUpperCase()){
      newWord = String.fromCharCode((155-word[i].charCodeAt(0)));  
      newSen += newWord;
    }else if(word[i] === word[i].toLowerCase()){
      newWord = String.fromCharCode((219-word[i].charCodeAt(0)));
      newSen += newWord;
    }
  }
  console.log(newSen);
  answer = newSen;
  return answer;
}

module.exports = problem4;

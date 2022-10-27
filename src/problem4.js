function problem4(word) {
  var answer;
  var newWord = '';
  var newSen = '';
  console.log(word);
  // console.log(word[0]);
  for(let i=0;i<word.length;i++){
    if(word[i] === ' '){
      newSen += ' ';
    }else if(word[i] === word[i].toUpperCase()){
      //console.log(155-word[i].charCodeAt(0));
      newWord = String.fromCharCode((155-word[i].charCodeAt(0)));
      //console.log(newWord);  
      newSen += newWord;
    }
  }
  console.log(newSen);
  answer = newSen;
  return answer;
}

module.exports = problem4;
word = 'I love you';
problem4(word);

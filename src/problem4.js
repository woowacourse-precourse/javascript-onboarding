function problem4(word) {
  var answer;
  var newWord = '';
  var newSen = '';
  console.log(word);
  // console.log(word[0]);
  for(let i=0;i<word.length;i++){
    if(word[i] === ' '){
      newSen += ' ';
    }
  }
  console.log(newSen);
  answer = newSen;
  return answer;
}

module.exports = problem4;
word = 'I love you';
problem4(word);

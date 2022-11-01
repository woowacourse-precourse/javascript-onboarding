function problem4(word) {
  var answer = [];
  let arr = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetArr = [...arr];
  let words = [...word];

  function indexer (l){
    for (let i = 0 ; i < alphabetArr.length ; i++){
      if (words[l] == alphabetArr[i]){
        answer.push(alphabetArr[alphabetArr.length -i -1]);
      } else if (words[l] == alphabetArr[i].toUpperCase()){
        answer.push(alphabetArr[alphabetArr.length -i -1].toUpperCase());
      }
    }
  }
  for (l in words){
    console.log(l);
    if (words[l] == ' '){answer.push(words[l])}
    else  {indexer(l);}
  }

  return answer.join('');
}

module.exports = problem4;

function problem4(word) {
  var answer = [];
  const arr = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArr = [...arr];
  let words = [...word];

  for (l in words){
    for (let i = 0 ; i < alphabetArr.length ; i++){
      if (words[l].toLowerCase() == alphabetArr[i]){
        answer.push(alphabetArr[alphabetArr.length -i -1]);
      }
    }
  }

  return answer;
}


module.exports = problem4;

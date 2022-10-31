function problem4(word) {
  let answer = "";

  for (let i = word.length - 1; i >= 0; i--){
    answer = answer + word[i];
  }
  
  return answer;
}

module.exports = problem4;

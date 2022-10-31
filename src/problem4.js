function problem4(word) {
  let answer=[];
  let lower=[];
  let upper=[];

  for(let i = 65; i<=90; i++){ upper.push(String.fromCharCode(i)); }
  for(let i = 97; i<=122; i++){ lower.push(String.fromCharCode(i)); }
  
  for(let i = 0; i<word.length; i++){
    if(word[i] === ' ') { answer.push(' '); }
    if(lower.includes(word[i])){
      answer.push(lower[lower.length - lower.indexOf(word[i]) - 1]);
    }
    if(upper.includes(word[i])){
      answer.push(upper[upper.length - upper.indexOf(word[i]) - 1]);
    }
  }
  answer = answer.join('');
  return answer;
}

module.exports = problem4;

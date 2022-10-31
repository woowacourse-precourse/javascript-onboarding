function problem4(word) {
  let answer=[];
  let lower=[];
  let upper=[];

  for(let i = 65; i<=90; i++){ upper.push(String.fromCharCode(i)); }
  for(let i = 97; i<=122; i++){ lower.push(String.fromCharCode(i)); }

  return answer;
}

module.exports = problem4;

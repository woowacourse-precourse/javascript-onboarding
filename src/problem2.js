function solve(text){
  if(text === ""){
    return text;
  }
  let res = [text[0]];
  let prev = text[0];
  for(let i = 1; i < text.length; i++){
    if(res[res.length-1] === text[i] || prev === text[i]){
      res.pop()
    }else{
      prev = text[i]
      res.push(text[i])
    }
  }
  return res;
}

function problem2(cryptogram) {
  let answer = solve(cryptogram);
  return answer.join('');
}

module.exports = problem2;

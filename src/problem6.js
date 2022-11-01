function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

function getDuplicateMap(form, tokenMap){
  let email = form[0];
  for(let x = 0;x < form[1].length - 1;x++){
    let nameToken = form[1].slice(x, x + 2);
    if(tokenMap.has(nameToken) && tokenMap.get(nameToken).indexOf(email) < 0){
      tokenMap.set(nameToken, [...tokenMap.get(nameToken), email]);
    }else{tokenMap.set(nameToken, [form[0]]);}
  }
  return tokenMap;
}


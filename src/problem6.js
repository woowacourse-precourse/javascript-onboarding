function problem6(forms) {

  let checkMemo = [];
  let repeatedName = [forms[0]];

  for(let el of forms) {
    let nickname = el[1];
    for(let i = 0; i < nickname.length-1; i++) {
      let checkName = nickname[i] + nickname[i+1];
      if(checkMemo.includes(checkName)) repeatedName.push(el);
      else checkMemo.push(checkName);
    } 
  }

  let dedup = [...new Set(repeatedName)];
  let result = [];
  
  for(let el of dedup) {
    result.push(el[0]);
    }
  return result.sort();
}

module.exports = problem6;

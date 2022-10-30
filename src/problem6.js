function problem6(forms) {

  let checkMemo = [];
  let repeatedNameFirst = [forms[0]];

  for(let el of forms) {
    let nickname = el[1];
    for(let i = 0; i < nickname.length-1; i++) {
      let checkNameFirst = nickname[i] + nickname[i+1];
      if(checkMemo.includes(checkNameFirst)) repeatedNameFirst.push(el);
      else checkMemo.push(checkNameFirst);
    } 
  }

  let nicknameFinal = forms[0][1];
    for(let i = 0; i < nicknameFinal.length-1; i++) {
      let checkNameFinal = nicknameFinal[i] + nicknameFinal[i+1];
      if(checkMemo.includes(checkNameFinal)) repeatedNameFirst.push(forms[0]);
    } 

  let dedup = [...new Set(repeatedNameFirst)];
  let result = [];
  for(let el of dedup) {
    result.push(el[0]);
    }

  return result.sort();
}

module.exports = problem6;

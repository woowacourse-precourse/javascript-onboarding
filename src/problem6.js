function problem6(forms) {
  let result = [];
  let check = new Array(forms.length).fill(0);
  let names = new Object();

  for (let i = 0; i < forms.length; i++) {
    let nickname = forms[i][1];

    if (nickname.length > 1) {
      
      for (let j = 0; j < nickname.length - 1; j++) {
        let subName = nickname[j] + nickname[j + 1]

        if (subName in names) {
          names[`${subName}`].push(i);
        } else {
          names[`${subName}`] = [i]
        }
      }
    }
  }

  for (let name in names) {
    let duplicate = names[name]

    if (duplicate.length === 1) {
      continue
    }
    
    for (let idx of duplicate) {
      if (check[idx] == 0) {
        result.push(forms[idx][0])
      }
    }
  }
  
  result.sort()
  return result;
}

module.exports = problem6;

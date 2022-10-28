function problem6(forms) {
  const twoSringNames = twoStringHash(forms); // {'제이': 1, ...}

  const duplicatedNames = duplicatedStr(twoSringNames);

  const regexp = '^[가-힣]*[[__str__]][가-힣]*$';

  const duplicated_regExp = regExpMap(duplicatedNames, regexp);
}


module.exports = problem6;

const twoStringHash = (forms) => {
  const nicknames = forms.map(form => form[1]);
  const hash = {};

  nicknames.forEach((nickname, i) => {
    let set = new Set();

    for (let j = 0; j < nickname.length - 1; j++) {
      const two = nickname[j] + nickname[j+1];
      set.add(two);
    }
    
    set.forEach(v => {
      if (hash[v]) {
        hash[v]++;
      } 
      else {
        hash[v] = 1;
      }
    });
  });
  return hash;
}

const duplicatedStr = (twoSringNames) => {
  const res = [];

  for (const name in twoSringNames) {
    if (twoSringNames[name] > 1) {
      res.push(name);
    }
  } 

  return res;
}

const regExpMap = (arr, regexp) => {
  const res = arr.map(name => new RegExp(
    regexp.replace('[[__str__]]',
    name)));

  return res;
}

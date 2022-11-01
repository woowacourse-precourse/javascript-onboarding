function problem6(forms) {
  var answer;
  const map1 = {};
  for(let i = 0;i<forms.length;i++){
    for(let j = 0; j<forms[i].length - 1 ; j++){
      let str = froms[i].slice(j,j + 2);
      if(map1.has(str))
        map1[str]++;
      else
        map1[str] = 0;
    }
  }

  for(let i = 0;i<forms.length;i++){
    for(let j = 0; j<forms[i].length - 1 ; j++){
      let str = froms[i].slice(j,j + 2);
      if(map1.has(str))
        map1[str]++;
      else
        map1[str] = 0;
    }
  }

  return answer;
}

module.exports = problem6;

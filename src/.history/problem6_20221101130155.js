function problem6(forms) {
  var answer = [];
  let map1 = new Map();
  for(let i = 0;i<forms.length;i++){
    for(let j = 0; j<forms[i][1].length - 1 ; j++){
      let str = forms[i][1].slice(j,j + 2);
      if(map1.has(str))
      	map1.set(str,2);
      else
       map1.set(str,1);
    }
  }

  for(let i = 0;i<forms.length;i++){
    for(let j = 0; j<forms[i][1].length - 1 ; j++){
      let str = forms[i][1].slice(j,j + 2);
      if(map1.get(str) == 2)
      {
      	answer.push(forms[i][0]);
      	break;
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;

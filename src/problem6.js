function problem6(forms) {  
  function verify(nickName, index) {
    for (let k = 0; k < nickName.length - 1; k++) {
      let str = nickName.slice(k, k + 2);
      
      for (let targetIndex = index + 1; targetIndex < nickNames.length; targetIndex++) {
        if (nickNames[targetIndex].includes(str)) {
          answer.add(forms.get(nickName));
          answer.add(forms.get(nickNames[targetIndex]));
          return;
        }
      }
    }
  }
  
  forms = forms.reduce((res, v) => {
    res.set(v[1], v[0]);
    return res;
  }, new Map());
  const answer = new Set();
  let nickNames = [...forms.keys()];

  for (let i = 0; i < nickNames.length; i++)
    verify(nickNames[i], i);
  
  return [...answer].sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
}

// console.log(problem6([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]))
module.exports = problem6;

function problem6(forms) {
  var answer=[];
  var form = [];
  for(let i=0; i<forms.length;i++){
    form.push(forms[i][1]);
  }

  for(let i=0; i<forms.length;i++){
    for(let j=0; j<form.length-1;j++){
      for(let q=0; q<forms.length-1;q++){
        if(form[q].includes(form[i][j]+form[i][j+1]) && form[q] !== form[i]){
          // console.log(form[q],form[i][j]+form[i][j+1]);
          answer.push(forms[q][0]);
        }
      }
    }
  }
  //console.log([...new Set(answer.sort())]);
  return [...new Set(answer.sort())];
}

module.exports = problem6;
// forms = [["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]];
// problem6(forms);

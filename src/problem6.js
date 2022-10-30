function problem6(forms) {
  var answer=[];
  var form = [];
  for(let i=0; i<forms.length;i++){
    form.push(forms[i][1]);
  }
  return answer;
}

module.exports = problem6;
// forms = [["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]];
// problem6(forms);

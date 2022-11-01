function problem6(forms) {
  let answer = [];
  let dupli = "제이";

  for(let i=0; i<forms.length; i++){
    if(forms[i][1].includes(dupli)) answer.push(forms[i][0]);
  }
  answer.sort();

  return answer;
}

module.exports = problem6;

function problem6(forms) {
  let answer = [];
  let arr = [];
  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length-1; i++) {
      const check = nickname.slice(i, i + 2);
      check in arr ? arr[check]++ : (arr[check] = 1);  
    }});
  forms.map((form) => {
    const [email, nickname] = form;
    for(let i = 0; i<nickname.length-1; i++) {
      const check = nickname.slice(i,i+2);
      if(arr[check] > 1) {
        answer.push(email)
      }
    }
  })
  answer.sort();

  return answer;
}
module.exports = problem6;

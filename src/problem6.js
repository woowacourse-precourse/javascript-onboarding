function problem6(forms) {
  
  let user = [];
  let answer = [];
  
  forms.map((form) => {
    const [useremail, username] = form;
    for(let i = 0; i<username.length - 1; i++){
      let word = username.slice(i, i + 2);
      word in user ? user[word]++ : user[word] = 1;
    }    
  });

  forms.map((form) => {
    const [useremail, username] = form;
    for(let i = 0; i < username.length - 1; i++){
      let word = username.slice(i, i + 2);
      if(user[word] > 1){
        answer.push(useremail);
      }
    }
  });

  answer.sort();
  
  return answer;
}

module.exports = problem6;

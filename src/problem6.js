function errorcheck(forms){
  if (forms.length < 1 || forms.length > 10000){
    return false;
  }
  const check = [];
  forms.map((user) => {
    if (user[0] < 11 || user[0] >= 20){
      check.push(false);
    }
    else if ((/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test(user[0]) === false){
      check.push(false);
    }
    else if (!user[0].includes('@email.com')){
      check.push(false);
    }
    else if (user[1] < 1 || user[1] >= 20){
      check.push(false);
    }
    else if ((/^[가-힣]*$/).test(user[1]) === false){
      check.push(false);
    }
  })
  return (check.length === 0 ) ? true : false; 
  
}

function duplicateWord(nickname){
  const dupcheck = [];
  const id = [];
  nickname.map((user, idx) => {
    for (let i = 0; i < user.length-1; i++){
      if (dupcheck.includes(user.substr(i, 2))){
        id.push(idx);
      }
      else{
        dupcheck.push(user.substr(i, 2));
      }
    }
  })
  return new Set(id);
}

function problem6(forms) {
  var answer;
  if (!errorcheck(forms)){
    return '입력 형식을 확인해주세요';
  }
  else{
    
    return answer;
  }
}

module.exports = problem6;

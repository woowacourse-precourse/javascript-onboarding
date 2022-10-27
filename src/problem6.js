function error(forms){
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


function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

function checkEmail(crew, idx, forms){
  if(!crew[0].includes("email.com")){
    forms.splice(idx, 1);
  }
}

function splitNickname(forms){
  const twoWordArr = [];

  for(let i = 0 ; i<forms.length ; i++){
    const add = [];
    for(let j = 0; j<forms[i][1].length - 1 ; j++){
      add.push(forms[i][1].substr(j,2));
    }
    twoWordArr.push(add);
  }
  return twoWordArr;
}

function problem6(forms) {
  forms.forEach(checkEmail); 
}

module.exports = problem6;

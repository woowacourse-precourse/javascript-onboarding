function checkEmail(crew, idx, forms){
  if(!crew[0].includes("email.com")){
    forms.splice(idx, 1);
  }
}

function problem6(forms) {
  forms.forEach(checkEmail); 
}

module.exports = problem6;

function problem6(forms) {

  forms.forEach((formList) => {
      stack = [];
      for (let letter of formList[1]){
          if (stack.length < 2)
              stack.push(letter);
          if (stack.length === 2){
              x = stack.join('')
          }
      } 
  })
  
}

module.exports = problem6;

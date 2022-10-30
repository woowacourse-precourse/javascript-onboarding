function problem6(forms) {
  const dictionary = {};

  forms.forEach((formList) => {
      const stack = [];
      for (let letter of formList[1]){
          if (stack.length < 2)
              stack.push(letter);
          if (stack.length === 2){
              x = stack.join('')
              if (!dictionary.hasOwnProperty(x)){
                dictionary[x] = [formList[0]]
              }
              
          }
      } 
  })
  
}

module.exports = problem6;

function problem6(forms) {
  const dictionary = {};
  const result = [];

  forms.forEach((formList) => {
      const stack = [];
      for (let letter of formList[1]){
          if (stack.length < 2)
              stack.push(letter);
          if (stack.length === 2){
              x = stack.join('')
              if (dictionary.hasOwnProperty(x)){
                dictionary[x].push(formList[0])
              }
              if (!dictionary.hasOwnProperty(x)){
                dictionary[x] = [formList[0]]
              }
              stack.shift();
              
          }
      } 
  });

  for (let key in dictionary){
    if (dictionary[key].length > 1){
        result.push(...dictionary[key]);
    }
}
 return result.filter((v, i) => result.indexOf(v) === i).sort(); 
}

module.exports = problem6;

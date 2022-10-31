function problem6(forms) {
  const dictionary = {};
  const result = [];
  const userMail = 0;
  const userId = 1;
  const maxLetterLength = 2;

  forms.forEach((formList) => {
      const stack = [];
      for (let letter of formList[userId]){
          if (stack.length < maxLetterLength)
              stack.push(letter);
          if (stack.length === maxLetterLength){
              x = stack.join('')
              if (dictionary.hasOwnProperty(x)){
                dictionary[x].push(formList[userMail])
              }
              if (!dictionary.hasOwnProperty(x)){
                dictionary[x] = [formList[userMail]]
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

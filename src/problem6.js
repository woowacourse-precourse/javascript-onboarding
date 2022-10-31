function problem6(forms) {
  const dictionary = {};
  const result = [];
  const userMail = 0;
  const userId = 1;
  const maxLetterLength = 2;

  forms.forEach((personalInfo) => {
      const stack = [];
      for (let info of personalInfo[userId]){
          if (stack.length < maxLetterLength)
              stack.push(info);
          if (stack.length === maxLetterLength){
              x = stack.join('')
              if (dictionary.hasOwnProperty(x)){
                dictionary[x].push(personalInfo[userMail])
              }
              if (!dictionary.hasOwnProperty(x)){
                dictionary[x] = [personalInfo[userMail]]
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

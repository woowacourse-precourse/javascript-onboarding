function problem6(forms) {
  const dictionary = {};
  const result = [];
  const userMail = 0;
  const userId = 1;
  const maxLetterLength = 2;
  
  const StoreDuplicatedIdFromObj = (result, dictionary) => {
    const isDuplicated = dictionary => dictionary[key].length > 1;

    for (let key in dictionary){
      if (isDuplicated(dictionary)){
          result.push(...dictionary[key]);
        }
    }
  }

  /**
   * forms들을 순회하며 dictionary에 중복 포함 저장하는 로직
   */
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

  StoreDuplicatedIdFromObj();
  return result.filter((v, i) => result.indexOf(v) === i).sort(); 
}

module.exports = problem6;

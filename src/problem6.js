function problem6(forms) {
  const dictionary = {};
  const result = [];
  const userMail = 0;
  const userId = 1;
  const maxStackLength = 2;
  
  const StoreDuplicatedIdFromObj = (result, dictionary) => {
    const isDuplicatedFromObj = key => dictionary[key].length > 1;

    for (let key in dictionary){
      if (isDuplicatedFromObj(key)){
          result.push(...dictionary[key]);
        }
    }
  }
  const removeDuplicated = result => result.filter((v, i) => result.indexOf(v) === i);
  const pushEmailToExistedProperty = (x, info) => dictionary[x].push(info[userMail])
  const createNewProperty = (x, info) => dictionary[x] = [info[userMail]]
  /**
   * forms들을 순회하며 dictionary에 중복 포함 저장하는 로직
   */
  forms.forEach((personalInfo) => {
      const stack = [];
      for (let info of personalInfo[userId]){
          if (stack.length < maxStackLength)
              stack.push(info);
          if (stack.length === maxStackLength){
              x = stack.join('')
              if (dictionary.hasOwnProperty(x)){
                pushEmailToExistedProperty(x, personalInfo);
              }
              if (!dictionary.hasOwnProperty(x)){
                createNewProperty(x, personalInfo);
              }
              stack.shift();
              
          }
      } 
  });

  StoreDuplicatedIdFromObj(result, dictionary);
  return removeDuplicated(result).sort(); 
}

module.exports = problem6;

function problem6(forms) {
  const dictionary = {};
  const result = [];
  const userMail = 0;
  const userId = 1;
  const maxStackLength = 2;
  
  /**
   * 인자 배열에 중복된 이메일만 담아주는 함수.
   * @param {Array} result 
   * @param {Object} dictionary 
   * @return {undefined}
   */
  const storeDuplicatedIdFromObj = (result, dictionary) => {
    const isDuplicatedFromObj = key => dictionary[key].length > 1;

    for (let key in dictionary){
      if (isDuplicatedFromObj(key)){
          result.push(...dictionary[key]);
        }
    }
  }
  const removeDuplicated = result => result.filter((v, i) => result.indexOf(v) === i);
  const isStackFull = stack => stack.length === maxStackLength;
  const pushEmailToExistedProperty = (letters, email) => dictionary[letters].push(email);
  const pushEmailToUnexistedProperty = (letters, email) => dictionary[letters] = [email];
  /**
   * 스택에 2글자가 모이면 dict에 넣는 함수
   * @param {array} stack 
   * @param {String} email 
   * @return {undefined}
   */
  const pushEmailIntoDict = (stack, email) => {
    LengthTwoLetters = stack.join('');
    dictionary.hasOwnProperty(LengthTwoLetters) ? pushEmailToExistedProperty(LengthTwoLetters, email) : pushEmailToUnexistedProperty(LengthTwoLetters, email);
    
  }

  /**
   * forms들을 순회하며 dictionary에 중복 포함 저장하는 로직
   */
  forms.forEach((personalInfo) => {
      const stack = [];
      for (let info of personalInfo[userId]){
          stack.push(info);
          if (isStackFull(stack)){
              pushEmailIntoDict(stack, personalInfo[userMail])
              stack.shift();
          }
      } 
  });
  
  storeDuplicatedIdFromObj(result, dictionary);
  return removeDuplicated(result).sort(); 
}
module.exports = problem6;

const checkDuPlicateNickName = (nickNameArray) => {
  let prefixArray = [];
  for (let i = 0; i < nickNameArray.length; i++) {
    for (let j = 0; j < nickNameArray.length; j++) {
      const prefix = nickNameArray[i].slice(0, 2);
      if (nickNameArray[j] === nickNameArray[i]) continue;

      if (nickNameArray[j].includes(prefix)) prefixArray.push(nickNameArray[i], nickNameArray[j]);
    }
  }
  return Array.from(new Set([...prefixArray]));
};

const matchDuplicateNickNameToEmail = (emailArray, duplicateNickNameArray, formsobj) => {
  let result = [];
  for (let email of emailArray) {
    for (let i = 0; i < duplicateNickNameArray.length; i++) {
      if (formsobj[email] === duplicateNickNameArray[i]) result.push(email);
    }
  }
  return result;
};

function problem6(forms) {
  let answer;
  const formsObj = Object.fromEntries(forms);
  const nickNameArray = Object.values(formsObj);
  const emailArray = Object.keys(formsObj);
  const duplicateNickNameArray = checkDuPlicateNickName(nickNameArray);

  answer = matchDuplicateNickNameToEmail(emailArray, duplicateNickNameArray, formsObj).sort();

  return answer;
}

module.exports = problem6;

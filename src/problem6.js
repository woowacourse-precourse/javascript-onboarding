function problem6(forms) {
  return duplicateCheckApp(validationArr(forms));
}

function validationArr(CrewDataArr) {
  const validationFilterArr = [];
  const emailListArr = [];
  CrewDataArr.map(([crewEmail,crewNickname]) => {
    if (
      crewEmail.length >= 11 &&
      crewEmail.length < 20 &&
      crewEmail.includes("@email") &&      
      !emailListArr.includes(crewEmail) &&
      crewNickname.length >= 2 &&
      crewNickname.length < 20 &&
      !/[^가-힣]/.test(crewNickname)
    ) {
      validationFilterArr.push([crewEmail,crewNickname]);
      emailListArr.push(crewEmail);
    }
  });
  return validationFilterArr;
}

function duplicateCheckApp(CrewDataArr){
  const infoOfUsedTwoLetterMap = new Map();
  const emailOfUsedNickNameSet = new Set();
  CrewDataArr.forEach(([crewEmail,crewNickName]) => {
    for (let i = 0; i <crewNickName.length -1; i++){
      let twoLetterName = crewNickName.substr(i, 2);
      if (infoOfUsedTwoLetterMap.has(twoLetterName)){
        emailOfUsedNickNameSet.add(crewEmail);
        emailOfUsedNickNameSet.add(infoOfUsedTwoLetterMap.get(twoLetterName));
      } else {
        infoOfUsedTwoLetterMap.set(twoLetterName,crewEmail)
      }
    }
  });
  return [...emailOfUsedNickNameSet].sort();
}

module.exports = problem6;

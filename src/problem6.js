function problem6(forms) {
  return duplicateCheckApp(validationArr(forms));
}

function validationArr(forms) {
  const validationFilterArr = [];
  const emailDataArr = [];
  forms.map((data) => {
    if (
      data[0].length >= 11 &&
      data[0].length < 20 &&
      data[1].length >= 2 &&
      data[1].length < 20 &&
      data[0].includes("@email") &&
      !/[^가-힣]/.test(data[1]) &&
      !emailDataArr.includes(data[0])
    ) {
      validationFilterArr.push(data);
      emailDataArr.push(data[0]);
    }
  });
  return validationFilterArr;
}

function duplicateCheckApp(CrewDataArr) {
  const duplicateDataArr = [];
  for (let i = 0; i < CrewDataArr.length; i++) {
    let TwoLetterNameArr = getNameByTwoLetterArr(CrewDataArr[i]);
    for(let j = 0; j < TwoLetterNameArr.length; j++) {
      if(checkNickNameFromCrewData(CrewDataArr[i],TwoLetterNameArr[j])){
        duplicateDataArr.push(CrewDataArr[i]);
        CrewDataArr.splice(i,1);
        i--;
      }
    }
  }
}

function getNameByTwoLetterArr(CrewNickName){
  const TwoLetterNameArr = [];
  for(let i = 0; i <CrewNickName.length-1; i++) {
    TwoLetterNameArr.push(CrewNickName.substr(i,2));
  }
  return TwoLetterNameArr;
}

module.exports = problem6;

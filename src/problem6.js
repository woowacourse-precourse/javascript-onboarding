console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
    ["jasp@email.com", "박이김"],
    ["jp@email.com", "김이박"],
    ["qpw@email.com", "김이순"],
    ["teemo@email.com", "티모"],
    ["banana@email.com", "대위티모"],
    ["secondJm@email.com", "제이엠"],
    ["apple@email.com", "땷횱봵"],
    ["stran@email.com", "횱봵으"],
    ["zebra@email.com", "두글자이상의문자가연속적으로이제맞티모"],
  ])
);

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
  for (let i = CrewDataArr.length-1; i >= 0; i--) {
    const delCrewDataIndexArr = [];
    let TwoLetterNameArr = getNameByTwoLetterArr(CrewDataArr[i][1]);
    for (let j = CrewDataArr.length-1; j >= 0 ; j--) {
      if (i != j && checkNickNameFromCrewData(CrewDataArr[j][1], TwoLetterNameArr)) {
        delCrewDataIndexArr.push(j);
      }
    }
    if(delCrewDataIndexArr.length>0){
      delCrewDataIndexArr.push(i).sort((a,b)=>b-a).map((idx)=>{
        duplicateDataArr.push(CrewDataArr[idx][0]);
        CrewDataArr.splice(idx, 1);
        i--;
      })
    }
  }
  return duplicateDataArr.sort();
}

function getNameByTwoLetterArr(CrewNickName) {
  const TwoLetterNameArr = [];
  for (let i = 0; i < CrewNickName.length - 1; i++) {
    TwoLetterNameArr.push(CrewNickName.substr(i, 2));
  }
  return TwoLetterNameArr;
}

function checkNickNameFromCrewData(CrewNickName, TwoLetterNameArr) {
  for (let k = 0; k < TwoLetterNameArr.length; k++) {
    if (CrewNickName.includes(TwoLetterNameArr[k])) return true;
  }
  return false;
}

module.exports = problem6;

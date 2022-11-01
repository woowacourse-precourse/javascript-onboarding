function checkEmail(crew, idx, forms){
  if(!crew[0].includes("email.com")){
    forms.splice(idx, 1);
  }
}

function sliceNickname(forms){
  const sliceNickArr = [];

  for(let i = 0 ; i<forms.length ; i++){
    const sliceTwoLetter = [];
    for(let j = 0; j<forms[i][1].length - 1 ; j++){
      sliceTwoLetter.push(forms[i][1].slice(j,j+2));
    }
    sliceNickArr.push(sliceTwoLetter);
  }
  return sliceNickArr;
}

function getCrewIndex(forms){
  const crewIndex = [];
  const sliceNickArr = sliceNickname(forms);
  for(let i = 0; i<sliceNickArr.length ; i++){
    for(let j = i+1 ; j<sliceNickArr.length ; j++){
      if(sliceNickArr[i].filter(x=> sliceNickArr[j].includes(x))!=""){
        crewIndex.push(i, j);
      }
    }
  }
  const crewIndexArr = [...new Set(crewIndex)];

  return crewIndexArr;
}

function getCrewEmail(forms){
  const crewEmailArr = [];
  const crewIndexArr = getCrewIndex(forms);

  for(let i = 0 ; i<crewIndexArr.length ; i++){
    crewEmailArr.push(forms[crewIndexArr[i]][0]);
  }
  crewEmailArr.sort();

  return crewEmailArr;
}

function problem6(forms) {
  forms.forEach(checkEmail);  
  return getCrewEmail(forms);
}

module.exports = problem6;
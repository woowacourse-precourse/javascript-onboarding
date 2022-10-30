function checkEmail(crew, idx, forms){
  if(!crew[0].includes("email.com")){
    forms.splice(idx, 1);
  }
}

function splitNickname(forms){
  const twoWordArr = [];

  for(let i = 0 ; i<forms.length ; i++){
    const add = [];
    for(let j = 0; j<forms[i][1].length - 1 ; j++){
      add.push(forms[i][1].substr(j,2));
    }
    twoWordArr.push(add);
  }
  return twoWordArr;
}

function getCrewIndex(forms){
  const crewIndex = [];
  const twoWordArr = splitNickname(forms);

  for(let i = 0; i<twoWordArr.length ; i++){
    for(let j = i+1 ; j<twoWordArr.length ; j++){
      if(twoWordArr[i].filter(x=> twoWordArr[j].includes(x))!=""){
        crewIndex.push(i, j);
      }
    }
  }
  const crewIndexArr = [...new Set(crewIndex)];

  return crewIndexArr;
}

function getCrewEmail(forms){
  const crewEmailArr = [];
  const crewIndex = getCrewIndex(forms);

  for(let i = 0 ; i<crewIndex.length ; i++){
    crewEmailArr.push(forms[crewIndex[i]][0]);
  }
  crewEmailArr.sort();

  return crewEmailArr;
}

function problem6(forms) {
  forms.forEach(checkEmail); 
}

module.exports = problem6;

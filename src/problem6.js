function problem6(forms) {
  var answer = [];
  let map = new Map();
  let rejectIndex = [];
  setMap(forms, map);
  checkNickname(forms, map, rejectIndex);
  pushAnswer(answer, forms, rejectIndex);
  return answer;
}

function handleExcept(forms, rejectIndex){
  for(let i = 0; i < forms.length; i++){
    const emailForm = "email.com";
    if(forms[i][0].indexOf(emailForm) == -1){
      rejectIndex.push(i);
    }
  }
}

function handleFormSize(forms){
  if(forms.length > 10000){
    forms.slice(0, 9999);
  }
}

function setMap(forms, map){
  for(let i = 0; i < forms.length; i++){
    for(let j = 0; j < forms[i][1].length - 1; j++){
      let tmp = forms[i][1].substr(j,2);
      if(map.has(tmp)){
        map.set(tmp, map.get(tmp) + 1);
      }
      else{
        map.set(tmp, 1);
      }
    }
  }
}

function checkNickname(forms, map, rejectIndex){
  for(let i = 0; i < forms.length; i++){
    for(let j = 0; j < forms[i][1].length - 1; j++){
      let tmp = forms[i][1].substr(j,2);
      if(map.get(tmp) > 1){
        rejectIndex.push(i);
        break;
      }
    }
  }
}

function pushAnswer(answer, forms, rejectIndex){
  for(let i = 0; i < rejectIndex.length; i++){
    answer.push(forms[rejectIndex[i]][0]);
  }
  answer.sort();
}

module.exports = problem6;

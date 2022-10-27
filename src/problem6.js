function problem6(forms) {
  var answer = [];
  let map = new Map();
  let rejectIndex = [];
  handleExcept(forms, rejectIndex);
  setMap(forms, map);
  checkNickname(forms, map, rejectIndex);
  deduplicate(rejectIndex);
  pushAnswer(answer, forms, rejectIndex);
  return answer;
}

function handleExcept(forms, rejectIndex){
  handleFormSize(forms);
  handleString(forms, rejectIndex);
}

function handleFormSize(forms){
  if(forms.length > 10000){
    forms = forms.slice(0, 10000);
  }
}

function handleString(forms, rejectIndex){
  for(let i = 0; i < forms.length; i++){
    const emailForm = "email.com";
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let crueEmail = forms[i][0];
    let crueNickname = forms[i][1];
    if((crueEmail.indexOf(emailForm) == -1)){
      rejectIndex.push(i);
    }
    else if((crueEmail.length < 11) || (crueEmail.length >= 20)){
      rejectIndex.push(i);
    }
    else if((crueNickname.length == 0) || (crueNickname.length >= 20)){
      rejectIndex.push(i);
    }
    else if(!(isKorean.test(crueNickname))){
      rejectIndex.push(i);
    }
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
  rejectIndex.sort();
}

function deduplicate(rejectIndex){
  rejectIndex = rejectIndex.filter(function(item, index){
    return rejectIndex.indexOf(item) === index;
  });
}

function pushAnswer(answer, forms, rejectIndex){
  for(let i = 0; i < rejectIndex.length; i++){
    answer.push(forms[rejectIndex[i]][0]);
  }
  answer.sort();
}

module.exports = problem6;

function findSameNames(forms){
  let subName = "";
  let subNameSet = new Set();
  let sameNameSet = new Set();
  let preSubNameSetSize = 0;
  
  for (let i=0; i < forms.length; i++){
    for (let j=0; j < forms[i][1].length; j++){
      subName = forms[i][1].substr(j, 2);
      if (subName.length === 2){
        preSubNameSetSize = subNameSet.size;
        subNameSet.add(subName);
        // 같은 이름이 들어온 경우
        if (preSubNameSetSize === subNameSet.size){
          sameNameSet.add(subName);
          break;
        }
      }
    }
  }
  return Array.from(sameNameSet);
}

function problem6(forms) {
  let answer = new Set();
  let sameNameList = findSameNames(forms);
  for (let i=0; i<sameNameList.length; i++){
    for (let j = 0; j < forms.length; j++){
      if (forms[j][1].includes(sameNameList[i])){
        answer.add(forms[j][0]);
      }
    }
  }
  return Array.from(answer).sort();
}

module.exports = problem6;

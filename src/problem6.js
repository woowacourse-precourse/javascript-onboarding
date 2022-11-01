function problem6(forms) {
  if(forms.length<1 || forms.length >10000){
    return -1;
  }
  let answer = [];
  let nameSet = [];
  let emailSet = [];
  let sCharIndex = [];

  for (let nameNum = 0; nameNum < forms.length; nameNum++) {
    emailSet.push(forms[nameNum][0]);
    nameSet.push(forms[nameNum][1]);
  }

  for (let index = 0; index < nameSet.length; index++) {
    let inst = sequenceChar(nameSet[index], nameSet, index);
    if (inst != -1) {
      sCharIndex.push(inst);
    }
  }

  sCharIndex = sCharIndex.reduce(function (acc, cur) {
    return acc.concat(cur);
  })
  sCharIndex = [...new Set(sCharIndex)];
  answer = returnEmail(sCharIndex, emailSet);
  return answer;
}

function sequenceChar(name, nameSet ,index) {
  let indexArr = [];
  for (let i = index; i < name.length - 1; i++) {
    let chars = name[i] + name[i + 1];
    for (let loop = 0; loop < nameSet.length; loop++) {
      if (nameSet[loop].indexOf(chars)>-1) {
        indexArr.push(loop);
      }
    }
  }
  if (indexArr.length != 0) {
    return indexArr;
  }
  return -1;
}

function returnEmail(indexSet, emailSet) {
  let emailArr = [];
  for (let i = 0; i < indexSet.length; i++) {
    emailArr.push(emailSet[indexSet[i]]);
  }
  return emailArr.sort();
}
module.exports = problem6;
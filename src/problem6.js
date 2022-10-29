function problem6(forms) {
  let answer = [];
  let nameSet = [];
  let emailSet = [];
  let sequenceCharIndex = [];

  for (let nameNum = 0; nameNum < forms.length; nameNum++) {
    emailSet = forms[nameNum][0];
    nameSet = forms[nameNum][1];
  }

  for (let index = 0; index < nameSet.length; index++) {
    if (sequenceChar(nameSet[index], nameSet)) {
      sequenceCharIndex += index;
    }
  }

  sequenceCharIndex = [...new Set(sequenceCharIndex)];
  answer = returnEmail(sequenceCharIndex, emailSet);
  return answer;
}

function sequenceChar(name, nameSet) {
  let indexArr = [];
  for (let i = 0; i < name.length - 1; i++) {
    let chars = name[i] + name[i + 1];
    for (let loop = 0; loop < set.length; loop++) {
      if(!(set[loop].indexOf(chars))){
        indexArr += loop;
      }
    }
  }
  return indexArr;
}

function returnEmail(indexSet, emailSet){
  let emailArr = [];
  for(let i =0; i< indexSet.length; i++){
    emailArr = emailSet[indexSet[i]];
  }

  return emailArr.sort();
}
module.exports = problem6;
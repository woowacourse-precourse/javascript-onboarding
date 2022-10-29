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
      sequenceCharIndex = [...new Set(sequenceCharIndex)];
    }
  }

  return answer;
}

function sequenceChar(name, set) {
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
module.exports = problem6;
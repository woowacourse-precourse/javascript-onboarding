function problem6(forms) {
  var answer;
  let emailList = [];
  let nickNameList = [];
  let duplicateIdxList = [];
  inputList(forms, emailList, nickNameList);
  checkDuplicate(nickNameList, emailList, duplicateIdxList);
  return duplicateIdxList.sort();
}

const checkDuplicate = (nickNameList, emailList, duplicateIdxList) => {
  nickNameList.reduce((priorNick, currentNick, nickIdx) => {
    for (i = 0; i < priorNick.length; i++) {
      [...priorNick.slice(i)].reduce((priorCheck, currentCheck) => {
        checkVal = priorCheck + currentCheck;
        nickNameList.slice(nickIdx).map((e, idx) => {
          e.includes(checkVal)
            ? inputdulicateValue(
                emailList[nickNameList.indexOf(e)],
                emailList[nickNameList.indexOf(priorNick)],
                duplicateIdxList
              )
            : null;
        });
        return priorCheck + currentCheck;
      });
    }
    return currentNick;
  });
};

const inputdulicateValue = (pre, now, duplicateIdxList) => {
  if (!duplicateIdxList.includes(pre)) {
    duplicateIdxList.push(pre);
  }
  if (!duplicateIdxList.includes(now)) {
    duplicateIdxList.push(now);
  }
};

const inputList = (forms, emailList, nickNameList) => {
  forms.map((e, idx) => {
    e[0].length >= 11 && e[0].length < 20 ? emailList.push(e[0]) : null;
    e[1].length > 0 && e[1].length < 20 ? nickNameList.push(e[1]) : null;
  });
};

module.exports = problem6;

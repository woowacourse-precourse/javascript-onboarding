function problem6(forms) {
  var answer;
  let emailList = [];
  let nickNameList = [];
  let duplicateIdxList = [];
  inputList(forms, emailList, nickNameList);

  return duplicateIdxList.sort();
}

const inputList = (forms, emailList, nickNameList) => {
  forms.map((e, idx) => {
    e[0].length >= 11 && e[0].length < 20 ? emailList.push(e[0]) : null;
    e[1].length > 0 && e[1].length < 20 ? nickNameList.push(e[1]) : null;
  });
};

module.exports = problem6;

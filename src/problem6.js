function problem6(forms) {
  var tmpList = new Set();
  var sameName = new Set();
  var answer = new Set();
  var preTmpListSize = 0;

  for (var i=0; i < forms.length; i++){
    for (var j = 0; j < forms[i][1].length; j++){
      tmp = forms[i][1].substr(j, 2);
      if (tmp.length === 2){
        preTmpListSize = tmpList.size;
        tmpList.add(tmp);
        // 같은 이름이 들어온 경우
        if (preTmpListSize === tmpList.size){
          sameName.add(tmp);
          break;
        }
      }
    }
  }
  var sameNameList = Array.from(sameName);
  for (var i=0; i<sameNameList.length; i++){
    for (var j = 0; j < forms.length; j++){
      if (forms[j][1].includes(sameNameList[i])){
        answer.add(forms[j][0]);
      }
    }
  }
  var answerList = Array.from(answer);
  answerList.sort();
  return answerList;
}

module.exports = problem6;

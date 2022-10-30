const isThereNickName = (email, name, sameNickName) => {
  var i = 0;

  while (i < sameNickName.length) {
    if (email === sameNickName[i][0] && name === sameNickName[i][1]) return 0;
    i += 1;
  }

  return 1; //배열안에 중복 된 값이 존재하지 않을때.
};

const compareNickName = (forms) => {
  var left = 0;
  var right = 2;
  var value = "";
  var idx = 0;
  var sameNickName = [];

  while (idx < forms.length) {
    // value값이 다른 닉네임에도 존재하는지 확인하는 과정.
    value = forms[idx][1].substring(left, right);
    for (let j = 0; j < forms.length; j++) {
      if (forms[j][1].includes(value) && idx != j) {
        if (isThereNickName(forms[j][0], forms[j][1], sameNickName)) sameNickName.push([forms[j][0], forms[j][1]]);
        if (isThereNickName(forms[idx][0], forms[idx][1], sameNickName)) sameNickName.push([forms[idx][0], forms[idx][1]]);
      }
    }
    left += 1;
    right += 1;
    if (left > forms[idx][1].length - 2) {
      idx += 1;
      left = 0;
      right = 2;
    }
  }

  return sameNickName;
};

function problem6(forms) {
  var answer = [];
  var tmpAnswer = [];

  tmpAnswer = compareNickName(forms);

  tmpAnswer.forEach((element) => {
    answer.push(element[0]);
  });

  answer.sort();

  return answer;
}


module.exports = problem6;

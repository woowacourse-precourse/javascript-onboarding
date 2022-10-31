/** 중복되는 닉네임 찾는 기능 **/
function findOverlap(forms) {
  let names = [];
  let overlapNames = [];
  let nowName;
  let temp;

  forms.forEach((element) => {
    names = names.concat(element[1]);
  });

  for (let i = 0; i < names.length; i++) {
    nowName = String(names.splice(i, 1));
    for (let j = 0; j < nowName.length - 1; j++) {
      temp = nowName[j] + nowName[j + 1];
      names.forEach((element) => {
        if (element.includes(temp) === true) overlapNames.push(element);
      });
    }
    names.splice(i, 0, String(nowName));
  }

  overlapNames = [...new Set(overlapNames)];
  return overlapNames;
}

// 중복되는 닉네임을 갖고 있는 교육생의 이메일을 찾아 정렬하는 기능
function problem6(forms) {
  var answer = [];
  let names = findOverlap(forms);

  for (let i = 0; i < forms.length; i++) {
    if (names.includes(forms[i][1])) answer.push(forms[i][0]);
  }

  return answer.sort();
}

module.exports = problem6;

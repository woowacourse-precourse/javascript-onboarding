function problem6(forms) {
  var answer;
  var email = forms.map((item) => item[0]);
  var name = forms.map((item) => item[1]);

  var nameSet = [];
  var nameSet2 = [];
  var emailSet = [];

  //2개의 문자열로 전부 분리
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < name[i].length; j++) {
      nameSet.push(name[i].slice(j, j + 2));
    }
  }

  nameSet.sort();
  nameSet = nameSet.filter((item) => item.length >= 2);

  for (let i = 0; i < nameSet.length; i++) {
    if (nameSet[i] == nameSet[i + 1]) { //연속된 문자 추출
      i = i + 1;
      nameSet2.push(nameSet[i]);
    }
  }

  for (let i = 0; i < email.length; i++) {
    for (let j = 0; j < nameSet2.length; j++)
      if (name[i].includes(nameSet2[j])) {
        emailSet.push(email[i]);
      }
  }
  return emailSet.sort();
}

module.exports = problem6;

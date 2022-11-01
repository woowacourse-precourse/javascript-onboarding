function splitName(name) {
  let arr = [];
  if (name.length <= 2) return [name];
  for (let i = 0; i < name.length - 1; i++) {
    arr.push(name.substr(i, 2));
  }
  return arr
}

function problem6(forms) {
  var answer;
  let emailList = [];
  let flag = false;

  for (let i = 0; i < forms.length - 1; i++) {
    let splitedName = splitName(forms[i][1]);

    for (let j = i + 1; j < forms.length; j++) {
      for (let k = 0; k < splitedName.length; k++) {
        let target = splitedName[k];
        if (forms[j][1].match(target)) {
          emailList.push(forms[j][0]);
          flag = true;
          break;
        }
      }
    }
    if (flag) emailList.push(forms[i][0]);
    flag = false;
  }

  const set = new Set(emailList);
  answer = [...set];
  answer.sort();
  return answer;
}

module.exports = problem6;

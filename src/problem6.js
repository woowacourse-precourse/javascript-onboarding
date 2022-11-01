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

  for (let i = 0; i < forms.length - 1; i++) {
    let splitedName = splitName(forms[i][1]);

  }

  return answer;
}

module.exports = problem6;

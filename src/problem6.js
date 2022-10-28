function problem6(forms) {
  const name = [];
  const obj = {};
  for (let i = 0; i < forms.length; i++) {
    name.push(forms[i][1]);
    // console.log(name);
    obj[name[i]] = [];
    for (let j = 0; j < name[i].length - 1; j++) {
      obj[name[i]] = obj[name[i]] + " " + [name[i].substr(j, 2)];
    }
    obj[name[i]] = obj[name[i]].split(" ");
    obj[name[i]] = obj[name[i]].splice(1, 2);
    // console.log(name);
  }
  var answer;
  return answer;
}

module.exports = problem6;

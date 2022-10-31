function problem6(forms) {
  let result = [];
  const name = [];
  const obj = {};
  for (let i = 0; i < forms.length; i++) {
    name.push(forms[i][1]);

    obj[name[i]] = [];
    for (let j = 0; j < name[i].length - 1; j++) {
      obj[name[i]] = obj[name[i]] + " " + [name[i].substr(j, 2)];
    }
    obj[name[i]] = obj[name[i]].split(" ");
    obj[name[i]] = obj[name[i]].splice(1, 2);
  }

  const newArr = [];

  for (let i = 0; i < forms.length; i++) {
    newArr.push(...obj[name[i]]);
  }
  let index;
  let clue;
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) !== newArr.lastIndexOf(newArr[i])) {
      index = newArr[i];
    }
  }
  for (let j = 0; j < name.length; j++) {
    if (obj[name[j]].indexOf(index) !== -1) {
      clue = name[j];
    }
    if (forms[j][1] === clue) {
      result.push(forms[j][0]);
    }
  }
  return result.sort();
}

module.exports = problem6;

function problem6(forms) {
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

  // for (let i = 0; i < forms.length - 1; i++) {
  //   for (let j = i + 1; j < forms.length - 1; j++) {
  //     if (obj[name[i]].filter((x) => obj[name[j]].includes(x))) {
  //       console.log(name[i]);
  //       console.log(obj[name[i]].filter((x) => obj[name[j]].includes(x)));
  //     }
  //   }
  // }
  const newArr = [];
  // console.log(obj["엠제이"].filter((x) => obj["제이엠"].includes(x)));
  for (let i = 0; i < forms.length; i++) {
    newArr.push(...obj[name[i]]);
  }
  let index;
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) !== newArr.lastIndexOf(newArr[i])) {
      index = newArr[i];
    }

    // console.log(index);
  }
  for (let j = 0; j < name.length; j++) {
    if (obj[name[j]].indexOf(index) !== -1) {
      console.log(name[j]);
    }
  }
  var answer;
  return answer;
}

module.exports = problem6;

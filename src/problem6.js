function problem6(forms) {
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms.length - 1; j++) {
      let name1 = forms[i][1];
      let name2 = forms[j][1];
      if (name1 === name2) {
        break;
      }
      console.log(checkOverlap(name1, name2));
      if (checkOverlap(name1, name2)) {
      }
    }
  }
}

function checkOverlap(name1, name2) {
  for (let k = 0; k < name1.length - 1; k++) {
    let nameTwoChar = name1.substring(k, k + 2);
    if (name2.includes(nameTwoChar)) {
      return true;
    }
  }
  return false;
}

module.exports = problem6;
problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

function problem6(forms) {
  let emailArr = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms.length - 1; j++) {
      let [name1, name2] = [forms[i][1], forms[j][1]];
      let [email1, email2] = [forms[i][0], forms[j][0]];
      if (name1 === name2) {
        break;
      }
      if (checkOverlap(name1, name2)) {
        emailArr.push(email1);
        emailArr.push(email2);
      }
    }
  }
  console.log(deleteOverlap(emailArr));
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

function deleteOverlap(arr) {
  let set = new Set(arr);
  let uniqueArr = [...set];
  return uniqueArr;
}

module.exports = problem6;
problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

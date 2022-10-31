function problem6(forms) {
  var answer = [];
  let nicknames = [];
  let emails = [];
  let stringsArr = [];

  // Separate nicknames and emails
  forms.map((v) => {
    nicknames.push(v[1]);
  });
  forms.map((v) => {
    emails.push(v[0]);
  });

  // Create string by two letters
  nicknames.map((name, name_i) => {
    let strings = {};
    for (let i = 0; i < name.length - 1; i++) {
      let string = name[i] + name[i + 1];
      strings[string] = emails[name_i];
    }
    stringsArr.push(strings);
  });

  // check nicknames
  for (let j = 0; j < stringsArr.length - 1; j++) {
    let curr = stringsArr[j];
    for (let k = j + 1; k < stringsArr.length; k++) {
      Object.keys(stringsArr[k]).map((value) => {
        if (curr[value]) {
          answer.push(emails[j]);
          answer.push(emails[k]);
        }
      });
    }
  }

  // Delete duplicates and sort answer array
  const answerSet = answer.filter((v, i) => i !== answer.indexOf(v));
  answerSet.sort();
  return answerSet;
}

module.exports = problem6;

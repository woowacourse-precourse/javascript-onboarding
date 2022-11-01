function checkSimiliarity(name1, name2) {
  let name1_flag = -1;
  let name2_flag = -1;
  let similiarity = false;

  for (let i = 0; i < name1.length; i++) {
    for (let j = 0; j < name2.length; j++) {
      if (name1[i] === name2[j]) {
        if (
          name1_flag !== -1 &&
          name2_flag !== -1 &&
          i - name1_flag === 1 &&
          j - name2_flag === 1
        ) {
          similiarity = true;
          break;
        }
        name1_flag = i;
        name2_flag = j;
      }
    }
  }

  return similiarity;
}

function checkDuplication(names) {
  const duplicates = [];

  for (let i = 0; i < names.length - 1; i++) {
    for (let j = i + 1; j < names.length; j++) {
      const isSimilar = checkSimiliarity(names[i], names[j]);

      if (isSimilar) {
        if (!duplicates.includes(names[i])) {
          duplicates.push(names[i]);
        }

        if (!duplicates.includes(names[j])) {
          duplicates.push(names[j]);
        }
      }
    }
  }

  return duplicates;
}

function problem6(forms) {
  const form_obj = {};
  const names = [];

  forms.map((form) => {
    const [email, name] = form;

    form_obj[name] = email;
    names.push(name);
  });

  const duplicates = checkDuplication(names);
  const sorted_duplicate_email = duplicates.map((duplicate) => form_obj[duplicate]).sort();

  return sorted_duplicate_email;
}

// console.log(problem6([
//   ["jm@email.com", "제이엠"],
//   ["jason@email.com", "제이슨"],
//   ["woniee@email.com", "워니"],
//   ["mj@email.com", "엠제이"],
//   ["nowm@email.com", "이제엠"],
// ]));

module.exports = problem6;

const deleteDuplicate = (duplicate) => {
  const result = new Set();
  for (let key in duplicate) {
    if (duplicate[key].length > 1) {
      duplicate[key].forEach((email) => {
        result.add(email);
      });
    }
  }

  return [...result];
};

const getDuplicateEmails = (forms) => {
  const duplicate = {};

  forms.forEach((form) => {
    for (let i = 0; i < form[1].length - 1; i++) {
      if (duplicate[form[1].substr(i, i + 2)] === undefined) {
        duplicate[form[1].substr(i, i + 2)] = [];
      }
      duplicate[form[1].substr(i, i + 2)].push(form[0]);
    }
  });

  const emails = deleteDuplicate(duplicate);
  return emails;
};

function problem6(forms) {
  var answer = getDuplicateEmails(forms);
  answer.sort();
  return answer;
}

module.exports = problem6;

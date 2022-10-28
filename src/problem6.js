const getInvalidNames = (names) => {
  const invalidNames = [];
  const invalidNameCases = [];

  names.forEach((name, index) => {
    for (let i = 0; i < name.length - 1; i++) {
      const invalidNameCase = name.slice(i, i + 2);
      if (!invalidNames.includes(invalidNameCase) && invalidNameCases.includes(invalidNameCase)) {
        invalidNames.push(invalidNameCase);
      } else {
        invalidNameCases.push(invalidNameCase);
      }
    }
  });

  return invalidNames;
};

const getEmailsFromNames = (forms, names) => {
  const filteredForms = forms.filter((form) => form[1].includes(names));
  const emails = filteredForms.map((form) => form[0]);

  return emails;
};

function problem6(forms) {
  const names = forms.map((form) => form[1]);
  const invalidNames = getInvalidNames(names);
  const emailsOfInvalidName = getEmailsFromNames(forms, invalidNames);

  return emailsOfInvalidName.sort();
}

module.exports = problem6;

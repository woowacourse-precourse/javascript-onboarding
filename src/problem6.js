function problem6(forms) {
  const names = forms.map((form) => form[1]);
  const invalidNames = getInvalidNames(names);
  const emailsOfInvalidName = getEmailsFromNames(forms, invalidNames);

  return emailsOfInvalidName.sort();
}

function getInvalidNames(names) {
  const invalidNames = [];
  const invalidNameCases = [];

  names.forEach((name) => {
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
}

function getEmailsFromNames(forms, names) {
  const filteredForms = forms.filter((form) => names.some((name) => form[1].includes(name)));
  const emails = filteredForms.map((form) => form[0]);

  return emails;
}

module.exports = problem6;

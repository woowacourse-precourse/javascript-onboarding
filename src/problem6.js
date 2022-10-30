function problem6(forms) {
  const names = forms.map((form) => form[1]);
  const invalidNames = getInvalidNames(names);
  const emailsOfInvalidName = getEmailsFromNames(forms, invalidNames);

  return emailsOfInvalidName.sort();
}

function getInvalidNames(names) {
  const invalidNames = [];
  const instances = [];

  names.forEach((name) => {
    for (let i = 0; i < name.length - 1; i++) {
      const instance = name.slice(i, i + 2);
      if (instances.includes(instance) && !invalidNames.includes(instance)) {
        invalidNames.push(instance);
      }
      if (!instances.includes(instance)) {
        instances.push(instance);
      }
    }
  });

  return invalidNames;
}

function getEmailsFromNames(forms, names) {
  const filteredForms = forms.filter((form) =>
    names.some((name) => form[1].includes(name))
  );
  const emails = filteredForms.map((form) => form[0]);

  return emails;
}

module.exports = problem6;

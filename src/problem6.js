function problem6(forms) {
  const result = [];
  forms.forEach((form, formIndex) => {
    const [_, name] = form;
    for (let i = 0; i < form.length - 1; i++) {
      const word = name.substring(i, 2);
      for (let j = formIndex + 1; j < forms.length; j++) {
        const compareName = forms[j][1];
        if (compareName.includes(word)) {
          result.push(form[0]);
          result.push(forms[j][0]);
        }
      }
    }
  });
}

problem6([
  ['jm@email.com', '제이엠'],
  ['jason@email.com', '제이슨'],
  ['woniee@email.com', '워니'],
  ['mj@email.com', '엠제이'],
  ['nowm@email.com', '이제엠'],
]);
// module.exports = problem6;

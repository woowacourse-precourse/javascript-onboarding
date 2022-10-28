function problem6(forms) {
  const result = [];
  forms.forEach((form, formIndex) => {
    const [_, name] = form;

    for (let i = 0; i < form.length; i++) {
      const word = name.substring(i, i + 2);
      for (let j = formIndex + 1; j < forms.length; j++) {
        console.log(word);
        const compareName = forms[j][1];
        if (compareName.includes(word)) {
          console.log(word);
          result.push(form[0]);
          result.push(forms[j][0]);
        }
      }
    }
  });
  const removeEmailDuplication = (emailList) => {
    return [...new Set(emailList)];
  };

  const sortListAscending = (array) => {
    return array.sort();
  };
  return sortListAscending(removeEmailDuplication(result)); //?
}

//test
problem6([
  ['jm@email.com', '제이엠'],
  ['jason@email.com', '제이슨'],
  ['woniee@email.com', '이슨니'],
  ['mj@email.com', '엠제이'],
  ['nowm@email.com', '이제엠'],
]);
// module.exports = problem6;

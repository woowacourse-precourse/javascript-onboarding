function problem6(forms) {
  let user = [];
  let answer = [];

  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      let word = nickname.slice(i, i + 2);
      word in user ? user[word]++ : (user[word] = 1);
    }
  });

  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      let word = nickname.slice(i, i + 2);
      if (user[word] > 1) {
        answer.push(email);
      }
    }
  });

  answer = new Set(answer.sort());
  return [...answer];
}

module.exports = problem6;

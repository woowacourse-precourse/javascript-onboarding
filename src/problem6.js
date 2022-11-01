function problem6(forms) {
  let nicknames = [];
  let emails = [];

  var answer;

  for (let i = 0; i < forms.length; i++) {
    const nickname = forms[i][1];

    for (let j = 0; j < nickname.length - 1; j++) {
      nicknames.push(nickname.substr(j, 2));
    }
  }

  for (let i = 0; i < forms.length; i++) {
    const email = forms[i][0];

    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const result = nicknames.filter(
        (item) => item == forms[i][1].substr(j, 2)
      );

      if (result.length > 1) {
        emails.push(email);
      }
    }
  }
  answer = emails.sort();
  return answer;
}

module.exports = problem6;
function problem6(forms) {
  let emails = [];

  const existsSameWord = (name1, name2) => {
    for (let i = 0; i < name1.length - 1; i++) {
      for (let j = 0; j < name2.length - 1; j++) {
        if (name1[i] == name2[j] && name1[i + 1] == name2[j + 1]) {
          return true;
        }
      }
    }
    return false;
  };

  const pushEmails = (email1, email2) => {
    emails.push(email1, email2);
  };

  const deleteSameEmail = (emails) => {
    emails = new Set(emails);
    emails = Array.from(emails).sort();
    return emails;
  };

  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      let [email_of_crew1, nickName_of_crew1] = [forms[i][0], forms[i][1]];
      let [email_of_crew2, nickName_of_crew2] = [forms[j][0], forms[j][1]];

      if (existsSameWord(nickName_of_crew1, nickName_of_crew2)) {
        pushEmails(email_of_crew1, email_of_crew2);
      }
    }
  }
  return deleteSameEmail(emails);
}

module.exports = problem6;

function problem6(forms) {
  let emails = [];

  const includeSameWord = (name1, name2) => {
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
    emails.push(email1);
    emails.push(email2);
  };

  const deleteSameEmail = (emails) => {
    emails = new Set(emails);
    emails = Array.from(emails).sort();
    return emails;
  };

  // 두명씩 비교하기 위해 크루의 이메일, 닉네임 순회
  for (let i = 0; i < forms.length; i++) {
    let email_of_crew1 = forms[i][0];
    let nickName_of_crew1 = forms[i][1];
    for (let j = i + 1; j < forms.length; j++) {
      let email_of_crew2 = forms[j][0];
      let nickName_of_crew2 = forms[j][1];

      if (includeSameWord(nickName_of_crew1, nickName_of_crew2)) {
        pushEmails(email_of_crew1, email_of_crew2);
      }
    }
  }
  emails = deleteSameEmail(emails);
  return emails;
}

module.exports = problem6;

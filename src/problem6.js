function problem6(forms) {
  var answer;
  return answer;
}

function filterDuplicatedMemberEmail(forms, duplicatedObj) {
  const duplicatedMemberEmails = [];
  forms.forEach((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (duplicatedObj[testText] > 1) duplicatedMemberEmails.push(email);
    }
  });
  return duplicatedMemberEmails;
}

function makeDuplicatedObj(forms) {
  const duplicatedObj = {};
  forms.forEach((form) => {
    const [_, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (testText in duplicatedObj) duplicatedObj[testText] += 1;
      else duplicatedObj[testText] = 1;
    }
  });
  return duplicatedObj;
}

module.exports = problem6;

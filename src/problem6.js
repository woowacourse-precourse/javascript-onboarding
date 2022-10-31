function compare(str1, str2) {
  let len = str2.length;
  let result = false;
  for (let i = 0; i < (len - 1); i++) {
    let a = str2.substr(i, 2);
    if (str1.includes(a) === true) {
      result = true;
      break;
    }
  }
  return result;
}

function problem6(forms) {
  var answer = [];
  let emails = [], names = [];
  for (let i = 0; i < forms.length; i++) {
    emails.push(forms[i][0]);
    names.push(forms[i][1]);
  }
  for (let i = 0; i < (forms.length - 1); i++) {
    for (let j = i + 1; j < forms.length; j++) {
      if (compare(names[i], names[j])) {
        answer.push(emails[i]);
        answer.push(emails[j]);
      }
    }
  }
  answer = [...new Set(answer)];
  answer = Array.from(answer).sort();
  return answer;
}

module.exports = problem6;

// 같은 글자가 연속적으로 포함되는 지원자 추출 기능
function problem6(forms) {
  let emails = {},
      names = [],
      restricted_emails = [];
  
  for (let [email, name] of forms) {
    for (let stored_name of names) {
      for (let i = 0; i < name.length - 1; i++) {
        if (stored_name.includes(name.substr(i, 2))) {
          if (!restricted_emails.includes(emails[stored_name])) restricted_emails.push(emails[stored_name]);
          if (!restricted_emails.includes(email)) restricted_emails.push(email);
        }
      }
    }
    
    emails[name] = email;
    names.push(name);
  }

  // 해당 지원자의 이메일 오름차순 정렬
  restricted_emails.sort();
  return restricted_emails;
}

module.exports = problem6;

function compareNames(twoWordsOfName, forms, index, list) {
  for (let i = 0; i < forms.length; i++) {
    if (i != index && (forms[i][1]).indexOf(twoWordsOfName) != -1) {
      list.push(forms[i][0]);
      list.push(forms[index][0]);
      return true;
    }
  }
  return false;
}

function checkingLoop(forms, index, list) {
  let twoWordsOfName; 
  for (let i = 0; i < forms[index][1].length - 1; i++) {
    twoWordsOfName = forms[index][1].slice(i, i + 2);
    if (compareNames(twoWordsOfName, forms, index, list) == true)
      break;
  }
}

function isAlreadyTaken(mail, list) {
  if (list.indexOf(mail) == -1)
    return false;
  return true;
}

function checkDuplicateName(forms, list) {
  for (let i = 0; i < forms.length; i++) {
    if (isAlreadyTaken(forms[i][0], list))
      continue;
    if (forms[i][1].length == 1)
      continue;
    checkingLoop(forms, i, list);
  }
}

function isNameOK(name) {
  const korean = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;

  if (korean.test(name) == false)
    return false;
  if (name.length < 1 || name.length >= 20)
    return false;

  return true;
}

function isEmailOK(mail) {
  const domainIndex = mail.indexOf('@');
  if (domainIndex == -1)
    return false;
  const domain = mail.slice(domainIndex);
  if (domain != "@email.com")
    return false;
  if (mail.length < 11 || mail.length >= 20)
    return false;

  return true;
}

function checkException(forms, list) {
  for (let i = 0; i < forms.length; i++) {
    if (isEmailOK(forms[i][0]) == false) {
      list.push(forms[i][0]);
      continue;
    }
    if (isNameOK(forms[i][1]) == false) {
      list.push(forms[i][0]);
      continue;
    }
  }
}

function deleteDuplicate(list) {
  let set = new Set(list);
  let answer = Array.from(set);
  return answer;
}

function problem6(forms) {
  let list = [];
  checkException(forms, list);
  checkDuplicateName(forms, list);

  const answer = deleteDuplicate(list);
  return answer.sort();
}

module.exports = problem6;

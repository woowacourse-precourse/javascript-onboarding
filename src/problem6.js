function checkNickname(name, list) {

}

function checkEmail(mail, list) {
  mail.pop();
}

function checkException(forms, list) {

}

function deleteDuplicate(list) {
  let set = new Set(list);
  let answer = Array.from(set);
  return answer;
}

function problem6(forms) {
  let list = [];
  checkException(forms, problems);

  const answer = deleteDuplicate(list);
  return answer;
}

module.exports = problem6;

function problem6(forms) {
  var answer;
  return answer;
}

function isRightDomain(email) {
  return email.indexOf("email.com");
}

function isKoreanName(name) {
  for (let i = 0; i < name.length; i++) {
    check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (!check.test(name[i])) return -1;
  }
  return 1;
}

module.exports = problem6;

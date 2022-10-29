function problem6(forms) {
  var answer = getEmailList(forms);
  return answer;
}
function makePatterns(nickname) {
  const resultArray = [];
  for (let x = 0; x < nickname.length - 1; x++)
    resultArray.push(nickname.substr(x, 2));
  return resultArray;
}
function getEmailList(forms) {
  let x = 0;
  const result = [];
  for (x = 0; x < forms.length; x++) {
    const nickname = forms[x][1];
    const patterns = makePatterns(nickname);
    duplicateCheck(forms, result, x, patterns);
  }
  return result.sort();
}
function duplicateCheck(forms, result, compareIndex, patterns) {
  let index = compareIndex + 1;
  while (index < forms.length) {
    const currentNickname = forms[index][1];
    const currentEmail = forms[index][0];
    const compareEmail = forms[compareIndex][0];
    patterns.forEach((pattern) => {
      if (currentNickname.includes(pattern)) {
        resultPush(result, currentEmail);
        resultPush(result, compareEmail);
      }
    });
    index++;
  }
}
function resultPush(result, target) {
  if (!result.includes(target)) result.push(target);
}
function checkValidation(forms) {}
function checkLength(forms) {
  if (forms.length >= 1 && forms.length <= 10000) return true;
  return false;
}
function checkEamil(forms) {
  const spcPattern = /[~!@#$%^&*()_+|<>?:{}]/;
  for (let x = 0; x < forms.length; x++) {
    const email = forms[x][0];
    if (!checkEmailLength(email)) return false;
    if (!email.includes("@email.com")) return false;
    if (!email.substr(-10, eamil.length)) return false;
    if (email.split("@").length != 2) return false;
    if (spcPattern.test(email.split("@")[0])) return false;
  }
  return true;
}
function checkEmailLength(email) {
  if (email.length >= 11 && email.length < 20) return false;
  return true;
}
function checkNickname(forms) {
  for (let x = 0; x < forms.length; x++) {
    if (!checkNicknameLength(forms[x][1])) return false;
  }
  return true;
}
function checkNicknameLength(nickname) {
  if (nickname.length >= 1 && nickname.length < 20) return true;
  return false;
}
module.exports = problem6;

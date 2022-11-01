const MIN_LENGTH = 1;
const MAX_LENGTH = 10000;

function problem6(forms) {
  if (!checkValidation(forms)) throw new Error("입력오류입니다.");
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
function checkValidation(forms) {
  return checkLength(forms) && checkEmail(forms) && checkNickname(forms);
}
function checkLength(forms) {
  if (forms.length >= MIN_LENGTH && forms.length <= MAX_LENGTH) return true;
  return false;
}
function checkEmail(forms) {
  const spcPattern = /[~!@#$%^&*()_+|<>?:{}]/;
  for (let x = 0; x < forms.length; x++) {
    const email = forms[x][0];
    if (!checkEmailLength(email)) return false;
    if (!email.includes("@email.com")) return false;
    if (!(email.substr(-10, email.length) == "@email.com")) return false;
    if (email.split("@").length != 2) return false;
    if (spcPattern.test(email.split("@")[0])) return false;
  }
  return true;
}
function checkEmailLength(email) {
  if (email.length >= 11 && email.length < 20) return true;
  return false;
}
function checkNickname(forms) {
  for (let x = 0; x < forms.length; x++) {
    if (!checkNicknameLength(forms[x][1])) return false;
    if (!checkKorean(forms[x][1])) return false;
  }
  return true;
}
function checkNicknameLength(nickname) {
  if (nickname.length >= 1 && nickname.length < 20) return true;
  return false;
}
function checkKorean(nickname) {
  const korPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (korPattern.test(nickname)) return true;
  return false;
}
module.exports = problem6;

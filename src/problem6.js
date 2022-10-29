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
function checkValidation(forms) {
  
}
function checkLength(forms){
  if(forms.length>=1&&forms.length<=10000) return true;
  return false;
}
module.exports = problem6;

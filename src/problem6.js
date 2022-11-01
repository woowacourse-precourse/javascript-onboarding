function problem6(forms) {
  var answer;
  return answer;
}
function findPossibleNameArr(nickName) {
  let duplicatePossibleNameArr = [];
  for (let i = 0; i < nickName.length - 1; i++) {
    duplicatePossibleNameArr.push(nickName.substr(i, 2));
  }
  return duplicatePossibleNameArr;
}
function isIncludeSameName(nickName, duplicatePossibleNameArr) {
  for (let i = 0; i < duplicatePossibleNameArr.length; i++) {
    if (nickName.includes(duplicatePossibleNameArr[i])) return true;
  }
  return false;
}

module.exports = problem6;

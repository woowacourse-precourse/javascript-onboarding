function problem6(forms) {
  let emailArr = forms.map((x) => x[0]);
  let nameArr = forms.map((x) => x[1]);
  let indexArr = findSameNameIndexArr(emailArr, nameArr);
  let answer = [];
  for (let i = 0; i < indexArr.length; i++) {
    answer.push(emailArr[indexArr[i]]);
  }
  answer.sort();
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
function findSameNameIndexArr(emailArr, nameArr) {
  let sameNameIndexArr = [];
  for (let i = 0; i < emailArr.length; i++) {
    let possibleNameArr = findPossibleNameArr(nameArr[i]);
    for (let j = i + 1; j < emailArr.length; j++) {
      if (isIncludeSameName(nameArr[j], possibleNameArr)) {
        sameNameIndexArr.push(i);
        sameNameIndexArr.push(j);
      }
    }
    sameNameIndexArr = Array.from(new Set(sameNameIndexArr));
  }
  return sameNameIndexArr;
}
module.exports = problem6;

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


module.exports = problem6;

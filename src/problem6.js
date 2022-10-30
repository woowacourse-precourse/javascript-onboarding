function problem6(forms) {
  var answer = solution(forms);
  return answer;
}
function writeMemo(forms, memo) {
  forms.forEach(form => {
    let [currEmail, currNickName] = form;
    for (let i = 0; i < currNickName.length - 1; i++) {
      let currWindow = currNickName.substring(i, i + 2);
      if (memo[currWindow]) {
        memo[currWindow].push(currEmail);
      } else {
        memo[currWindow] = [];
        memo[currWindow].push(currEmail);
      }
    }
  });
}
function solution(forms) {
  let memo = {};
  writeMemo(forms, memo);
  let answer = [];
  console.log(Object.values(memo));
  Object.values(memo).forEach(currMemoList => {
    if (currMemoList.length > 1) {
      answer = currMemoList.sort();
    }
  })
  return answer;
}
module.exports = problem6;
function divFun(forms, nickName, nickSet, check, now, emaSet) {
  let a = 0;
  for (let i = 0; i < nickName.length - 1; i++) {
    let nowStr = nickName.slice(i, i + 2);
    if (nickSet.has(nowStr)) {
      emaSet.add(forms[check.get(nowStr)][0]);
      a = 1;
    } else {
      check.set(nowStr, now);
    }
    nickSet.add(nowStr);
  }
  return a;
}
function problem6(forms) {
  let nickSet = new Set();
  let emaSet = new Set();
  let check = new Map();
  for (let i = 0; i < forms.length; i++) {
    if (divFun(forms, forms[i][1], nickSet, check, i, emaSet) == 1) {
      emaSet.add(forms[i][0]);
    }
  }
  var answer = [];
  emaSet.forEach((value, key, array) => {
    answer.push(value);
  });
  answer.sort();
  return answer;
}

module.exports = problem6;

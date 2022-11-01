function problem6(forms) {
  var answer;
  const map1 = new Map();
  forms.forEach(function (item) {
    map1.set(item[1], item[0]);
  });
  const nickName = [];
  forms.forEach(function (item) {
    nickName.push(item[1]);
  });
  return answer;
}

module.exports = problem6;

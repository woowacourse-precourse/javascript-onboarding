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
  nickName.forEach(function (oneName) {
    for (i = 0; i <= oneName.length - 1; i++) {
      newWord = oneName[i] + oneName[i + 1];
  return answer;
}

module.exports = problem6;

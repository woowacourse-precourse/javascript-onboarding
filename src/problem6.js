function nicknameWordMap(forms) {
  let map = new Map();
  forms.forEach((item) => {
    let nickname = item[1];
    for (let i = 0; i < length - 1; i++) {
      let subStr = nickname.substring(i, i + 2);
      if (map.has(subStr)) {
        map.set(subStr, "duplication");
      } else {
        map.set(subStr, "one");
      }
    }
  });
  return map;
}
function problem6(forms) {
  var answer;
  let map = nicknameWordMap(forms);
  return answer;
}

module.exports = problem6;

function nicknameWordMap(forms) {
  let map = new Map();
  forms.forEach((item) => {
    let nickname = item[1];
    for (let i = 0; i < nickname.length - 1; i++) {
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

function returnEmail(forms, map) {
  let set = new Set();
  forms.forEach((item) => {
    let email = item[0];
    let nickname = item[1];
    for (let i = 0; i < nickname.length; i++) {
      let subStr = nickname.substring(i, i + 2);
      if (map.get(subStr) === "duplication") set.add(email);
    }
  });
  return Array.from(set);
}
function problem6(forms) {
  let map = nicknameWordMap(forms);
  let answer = returnEmail(forms, map);
  answer.sort();
  return answer;
}

module.exports = problem6;

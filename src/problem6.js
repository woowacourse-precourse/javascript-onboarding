function filterByForm(item) {
  const rgx = /^[ㄱ-ㅎ|가-힣]+$/;
  const [email, nickname] = item;
  if (!rgx.test(nickname)) return false;
  if (nickname.length < 1 || nickname.length >= 20) return false;
  if ((email.length < 11) | (email.length >= 20)) return false;
  if (email[0] === "@") return false;
  if (!email.includes("@email.com")) return false;
  return true;
}
function errorHandling(forms) {
  if (forms.length < 1 || forms.length > 10000) return false;
  forms = forms.filter(filterByForm);
  return forms;
}
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
  if (!errorHandling(forms)) return -1;
  else forms = errorHandling(forms);
  console.log(forms);
  let map = nicknameWordMap(forms);
  let answer = returnEmail(forms, map);
  answer.sort();
  return answer;
}

module.exports = problem6;

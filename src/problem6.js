// Map의 has를 이용하여 중복 문자를 찾는 함수
function checkDup(forms) {
  let formMap = new Map();
  let emails = [];

  for (let i = 0; i < forms.length; i++) {
    let name = forms[i][1];

    if (name.length < 2 || name.length > 20) break;
    if (forms[i][0] < 11 || forms[i][0] > 20) break;

    for (let j = 0; j < name.length - 1; j++) {
      let nameSlice = name.slice(j, j + 2);

      if (formMap.has(nameSlice)) {
        let email = formMap.get(nameSlice);

        if (email !== forms[i][0]) {
          emails.push(forms[i][0], email);
        }
      }

      formMap.set(nameSlice, forms[i][0]);
    }
  }

  return emails.filter((res, idx) => emails.indexOf(res) === idx).sort();
}

function problem6(forms) {
  const answer = checkDup(forms);

  return answer;
}

module.exports = problem6;

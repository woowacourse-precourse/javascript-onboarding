/**
 * [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]
 * ["jason@email.com", "jm@email.com", "mj@email.com"]
 * 닉네임의 글자중 같은글자가 연속적으로 포함될 경우
 * 닉네임의 이메일을 목록에 추가하여 반환
 * @param {*} forms
 */
function problem6(forms) {
  const set = new Set();
  const map = new Map();

  for (let i = 0; i < forms.length; i++) {
    let nickname = forms[i][1];

    if (nickname.length < 2) {
      break;
    }

    for (let j = 0; j < nickname.length - 1; j++) {
      let char = nickname.substring(j, j + 2);
      if (map.has(char)) {
        let email = map.get(char);
        if (email !== forms[i][0]) {
          set.add(email);
          set.add(forms[i][0]);
        }
      }
      map.set(char, forms[i][0]);
    }
  }
  return [...set].sort();
}

module.exports = problem6;

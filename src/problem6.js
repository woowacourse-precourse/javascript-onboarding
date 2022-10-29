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

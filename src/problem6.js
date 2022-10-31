function problem6(forms) {
  const warningList = new Set();
  const map = new Map();
  for (let i = 0; i < forms.length; i++) {
    const [email, nickname] = forms[i];
    if (nickname.length < 2) {
      break;
    }
    for (let j = 0; j < nickname.length - 1; j++) {
      let twoWord = nickname.substring(j, j + 2);
      if (map.has(twoWord)) {
        let savedEmail = map.get(twoWord);
        if (savedEmail !== email) {
          warningList.add(savedEmail);
          warningList.add(email);
        }
      }
      map.set(twoWord, email);
    }
  }
  return [...warningList].sort();
}
module.exports = problem6;

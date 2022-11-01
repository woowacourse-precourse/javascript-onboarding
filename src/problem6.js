function problem6(forms) {
  const map = new Map();
  const mail_arr = [];

  for (let i = 0; i < forms.length; i++) {
    const [email, nickname] = forms[i];
    for (let x = 0; x < nickname.length - 1; x++) {
      const str = nickname.slice(x, x + 2);
      if (map.has(str)) {
        mail_arr.push(email);
        mail_arr.push(map.get(str));
      } else {
        map.set(str, email);
      }
    }
  }

  const set = new Set(mail_arr.sort());
  return [...set];
}

module.exports = problem6;

function problem6(forms) {
  let map = {};
  forms.forEach(([email, nick]) => {
    if (email.split("@")[1] != "email.com") return;
    for (let l = 2; l <= nick.length; l++) {
      for (let i = 0; i < nick.length - l + 1; i++) {
        let now = nick.slice(i, i + l);
        if (map[now]) map[now].push(email);
        else map[now] = [email];
      }
    }
  });
  return Object.values(map)
    .reduce((cur, arr) => {
      if (arr.length > 1) return [...cur, ...arr];
      return cur;
    }, [])
    .sort();
}
module.exports = problem6;
